#!/bin/bash

# Stop and remove any existing container with the same name
docker stop my-web-server-container
docker rm my-web-server-container

# Run the Docker container
docker run -d -p 8080:3000 --name my-web-server-container mandeepsainiok/devops01:myimage