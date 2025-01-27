FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./

RUN npm install

COPY ./src ./src

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
