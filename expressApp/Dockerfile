FROM node:18-alpine
RUN npm install -g nodemon
WORKDIR /app

RUN npm install
COPY . .
CMD ["node", "server", "npm", "start"]
EXPOSE 3005