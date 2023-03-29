FROM node:18-alpine
RUN npm install -g nodemon

WORKDIR /app

COPY  package.json .

RUN npm install
RUN npm install serve --location=global
RUN npm ci

EXPOSE 3002

# Use script specified in package,json
CMD ["npm", "start"]