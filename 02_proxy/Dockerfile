FROM node:20-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

EXPOSE 8000

COPY . /app

CMD ["npm", "run", "dev"]
