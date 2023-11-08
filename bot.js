import('node-fetch').then((nodeFetch) => {
    const fetch = nodeFetch.default;
  
    import('node-telegram-bot-api').then((TelegramBot) => {
      const TelegramBotApi = TelegramBot.default;
  
      // Substitua 'SEU_TOKEN_AQUI' pelo seu token
      const TOKEN = '6596243786:AAFhPCpgZpQmzjewPS05RRCkwho1TEcumsE';
      // Substitua 'SEU_ID_DO_GRUPO' pelo ID do seu grupo
      const GROUP_ID = '-1001933364591'; // ID do seu grupo
  
      // Função para obter uma bandeira aleatória
      function getRandomFlag() {
        const flags = [
          '🇦🇹', '🇦🇿', '🇧🇪', '🇭🇷', '🇨🇿', '🇩🇰', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🇫🇮', '🇫🇷',
          '🇩🇪', '🇮🇹', '🇨🇮', '🇳🇱', '🇵🇱', '🇵🇹', '🇲🇪', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🇷🇸',
          '🇪🇸', '🇸🇪', '🇨🇭', '🇹🇷', '🇺🇦', '🇺🇿'
        ];
        const randomIndex = Math.floor(Math.random() * flags.length);
        return flags[randomIndex];
      }
  
      // Função para criar uma quadra com um sinal "⚽️" gerado aleatoriamente
      function createSignalField() {
        const field = Array.from({ length: 15 }, () => '🟢');
        const randomIndex = Math.floor(Math.random() * 15);
        field[randomIndex] = '⚽️';
        return field;
      }
  
      // Função para criar a mensagem com três quadras e os links
      function createMessage() {
        const signalField1 = createSignalField();
        const signalField2 = createSignalField();
        const signalField3 = createSignalField();
  
        const messageText = `✅ OPORTUNIDADE IDENTIFICADA
  🥅 Penalty Shoot-Out Street
  
  ${signalField1.slice(0, 5).join('')}
  ${signalField1.slice(5, 10).join('')}
  ${signalField1.slice(10, 15).join('')}
  
  ${signalField2.slice(0, 5).join('')}
  ${signalField2.slice(5, 10).join('')}
  ${signalField2.slice(10, 15).join('')}
  
  ${signalField3.slice(0, 5).join('')}
  ${signalField3.slice(5, 10).join('')}
  ${signalField3.slice(10, 15).join('')}
  
  🔥 Escolha o time: ${getRandomFlag()}
  ⚽️ Estratégia: Repetição
  🔥Tentativas: 3
  ⏰ Válido por 5min
  [Cadastre-se aqui](https://afiliado.realsbet.com/visit/?bta=54155&brand=realsbet)
  [Clique aqui para jogar](https://realsbet.com/casino/game/2401481?provider=EVOPLAY)`;
  
        return messageText;
      }
  
      function sendMessages(chatId) {
        const bot = new TelegramBotApi(TOKEN, { polling: true });
  
        function sendSignalMessage() {
          const message = createMessage();
          bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
          setTimeout(sendSignalMessage, 5 * 60000); // Enviar a cada 5 minutos
        }
  
        function sendGreenMessage() {
          bot.sendMessage(chatId, '✅✅✅ GREEN ✅✅✅');
          setTimeout(sendGreenMessage, 4 * 60000); // Enviar a cada 4 minutos
        }
  
        // Inicialmente, envie a mensagem do sinal
        sendSignalMessage();
  
        // Agende o envio da mensagem "GREEN" para 4 minutos após o início
        setTimeout(sendGreenMessage, 4 * 60000);
      }
  
      // Substitua 'SEU_CHAT_ID_AQUI' pelo ID do chat ou grupo onde deseja enviar as mensagens
      sendMessages(GROUP_ID);
    });
  });
  
