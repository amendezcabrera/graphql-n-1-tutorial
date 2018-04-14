FROM node:9.3.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install pg@6.4.1 nodemon@1.12.1 sequelize@4.28.6 sequelize-cli@3.2.0 sequelize-auto@0.4.29 -g

RUN npm install

# Bundle app source
COPY ./app /usr/src/app

EXPOSE 81
EXPOSE 5050
EXPOSE 5433

CMD [ "npm", "start" ]
