FROM node:18-alpine

# Define onde o código vai morar no container
WORKDIR /usr/src/app

# Copia o package.json primeiro (otimiza o cache do Docker)
COPY package.json ./

# O Docker executa a instalação aqui, SEM você precisar digitar no CMD
RUN npm install

# Copia o seu código (index.js)
COPY . .

# Comando para iniciar a aplicação
CMD ["node", "index.js"]