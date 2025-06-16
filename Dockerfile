# Use official Node.js LTS image
FROM node:20-alpine


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install 


COPY . .


EXPOSE 80 3000

# Start the app
CMD ["node", "server.js"]