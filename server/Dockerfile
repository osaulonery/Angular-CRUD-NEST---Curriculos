FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm install -g npm@8.14.0

RUN npm i -g @nestjs/cli

USER node

WORKDIR /home/node/app