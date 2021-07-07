FROM node:16

# Install Redis server
RUN wget http://download.redis.io/redis-stable.tar.gz && \
  tar xvzf redis-stable.tar.gz && \
  cd redis-stable && \
  make && \
  mv src/redis-server /usr/bin/ && \
  cd .. && \
  rm -r redis-stable && \
  npm install -g concurrently

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
