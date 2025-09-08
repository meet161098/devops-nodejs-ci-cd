# Use official Node.js LTS base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
