#!/bin/bash
npx prisma migrate deploy
npx prisma db seed
node ./dist/src/server.js