FROM node:10.17.0-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
