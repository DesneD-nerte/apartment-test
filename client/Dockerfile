FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

RUN npm install

COPY . ./

CMD ["npm", "run", "start"]