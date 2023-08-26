# specify the node base image with your desired version node:<version>
FROM node:16

#Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json /app

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . /app

# Expose the port that the application will run on
EXPOSE 3000

# Command to run the application
CMD node index.js
