FROM node:alpine as runner
WORKDIR /app
COPY package*.json ./
RUN npm clean-install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
