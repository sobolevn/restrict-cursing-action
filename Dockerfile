FROM node:10

RUN npm install
ENTRYPOINT ["node", "lib/main.js"]
