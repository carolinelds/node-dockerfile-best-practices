# Building stage
FROM node:16-slim AS build

ENV NODE_ENV production

WORKDIR /app

COPY package.json package-lock.json tsconfig.json entrypoint.sh ./

RUN ["npm", "ci", "--omit=dev"]

COPY src ./src

RUN ["npm", "run", "build"]

RUN rm -rf src

# Run-time stage
FROM node:16-slim AS prod

USER node

ENV NODE_ENV production

WORKDIR /app

EXPOSE 5000

COPY --chown=node:node prisma ./prisma

COPY --chown=node:node --from=build app ./
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]


