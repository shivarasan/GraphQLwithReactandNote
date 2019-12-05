FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build

# start app
CMD ["npm", "start"]








# # base image
# FROM node:12.2.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install --silent
# RUN npm install react-scripts@3.0.1 -g --silent

# # start app
# CMD ["npm", "start"]