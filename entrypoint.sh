#!/bin/sh

echo "Gerando .env.example com variáveis de ambiente..."

echo "VITE_API_BASE_URL=$VITE_API_BASE_URL" > .env.example
echo "VITE_API_TOKEN=$VITE_API_TOKEN" >> .env.example

echo "Variáveis inseridas. Rodando build do Vite..."
npm run build

echo "Iniciando aplicação..."
serve -s dist -l 3000
