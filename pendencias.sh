#!/bin/bash

# Atualize o sistema
sudo apt update

# Instale o Node.js e o npm
sudo apt install -y nodejs npm

# Instale o Screen (caso não esteja instalado)
sudo apt install -y screen

# Instale as dependências necessárias para a API do Telegram e emojis
npm install node-telegram-bot-api node-fetch

echo "Configuração concluída. O Node.js, npm, Screen e as dependências necessárias foram instalados."
