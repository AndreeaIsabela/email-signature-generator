FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -g typescript

COPY . .

RUN tsc

EXPOSE 4000

CMD ["node", "dist/consumer.js"]
