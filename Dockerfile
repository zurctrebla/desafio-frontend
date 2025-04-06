FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

RUN npm install --global serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
