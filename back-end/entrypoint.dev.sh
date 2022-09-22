#!/bin/bash
npx prisma migrate dev
npx prisma db seed
npm run dev