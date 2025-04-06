FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x entrypoint.sh

RUN npm install --global serve

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
