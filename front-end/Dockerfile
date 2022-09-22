FROM node:16 AS build

ENV NODE_ENV production

WORKDIR /app

COPY . .

RUN ["npm", "ci", "--omit=dev"]

RUN ["npm", "run", "build"]


FROM node:16 AS prod

ENV NODE_ENV production

WORKDIR /var/www/html

COPY --chown=node:node --from=build app/build ./