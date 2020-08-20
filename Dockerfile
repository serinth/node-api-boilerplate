FROM node:12.18.3-alpine3.12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 4000

ARG env
ENV NODE_ENV $env

ENTRYPOINT ["npm", "run", "start"]
