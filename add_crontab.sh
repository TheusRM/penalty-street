#!/bin/bash

# Verifique se o arquivo de script existe
if [ -e /root/sataTelegrambot/bot.js ]; then
    # Adicione uma linha ao crontab
    (crontab -l ; echo "@reboot /usr/bin/node /root/sataTelegrambot/startup-bot.sh") | crontab -
    echo "Entrada adicionada ao crontab para iniciar /root/sataTelegrambot/startup-bot.sh na reinicialização."
else
    echo "O arquivo /root/sataTelegrambot/startup-bot.sh não foi encontrado."
fi
