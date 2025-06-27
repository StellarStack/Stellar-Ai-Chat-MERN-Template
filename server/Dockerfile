FROM node:20.11.0

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY ./src/. .

EXPOSE 3030

CMD ["node", "app.js"]
