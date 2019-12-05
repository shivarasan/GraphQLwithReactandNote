FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY ./ /usr/src/app/
COPY ./.babelrc /usr/src/app/
RUN npm install

# Expose port and CMD
CMD [ "npm", "start" ]