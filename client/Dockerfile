FROM node:alpine

WORKDIR /app

EXPOSE 3000

# COPY package*.json ./
COPY --chown=node:node package*.json ./

ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

RUN npm install

COPY --chown=node:node . ./
USER node
# COPY . ./
# RUN chmod 777 /app/node_modules
CMD ["npm", "run", "start"]