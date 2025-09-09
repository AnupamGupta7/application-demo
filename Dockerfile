# Use official Node.js base image
FROM node:18:asdiugysftydgyis

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Run the app
CMD [ "node", "index.js" ]
