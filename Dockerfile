FROM node:10-alpine

COPY . /tmp/cursing
WORKDIR /tmp/cursing

RUN npm install --prod
ENTRYPOINT ["node", "lib/main.js"]
