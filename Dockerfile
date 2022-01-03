FROM node:16

WORKDIR /usr/src/app

COPY . ./

RUN npm run install:all-packages

RUN npm run build:all-packages

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]