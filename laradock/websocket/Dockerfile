# base image
FROM node:8

# set working directory
#RUN mkdir -p /usr/local/etc/websocket
WORKDIR /usr/local/etc/websocket



# install and cache app dependencies
COPY package.json /usr/local/etc/websocket
COPY app.js /usr/local/etc/websocket

RUN npm install




# start app
CMD ["node", "app"]
