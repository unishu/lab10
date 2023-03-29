FROM node:18-alpine

RUN npm install -g nodemon
WORKDIR /app

RUN npm install
COPY . .
CMD [ "npm", "start"]
EXPOSE 3001