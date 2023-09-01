# the node base image with desired version node:<version>
FROM node:16

#Working directory inside the container
WORKDIR /app

COPY package.json /app

# Installing project dependencies
RUN npm install

# Copying the rest of the application code
COPY . /app

# Exposing the port that the application will run on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
