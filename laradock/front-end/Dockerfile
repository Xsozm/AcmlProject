# base image
FROM node:8

# set working directory
#RUN mkdir -p /usr/src/front-end
WORKDIR /usr/src/front-end




# install and cache app dependencies
COPY front-end/package.json /usr/src/front-end/
RUN npm install

ADD front-end/src /usr/src/front-end/src
ADD front-end/public /usr/src/front-end/public


# start app
CMD ["npm", "start"]
