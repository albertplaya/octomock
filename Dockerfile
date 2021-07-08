FROM node:16-stretch-slim

#Install Redis server
RUN apt-get update && apt-get install -y redis-server

EXPOSE 6379

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .

# Entrypoint configuration
COPY entrypoint.sh /sbin/entrypoint.sh
RUN chmod 755 /sbin/entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/sbin/entrypoint.sh"]
