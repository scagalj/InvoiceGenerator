# Use the official Node.js image.
FROM node:18

# Set the working directory inside the container.
WORKDIR /app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application files.
COPY . .

# Build the Next.js app.
RUN npm run build

# Expose the application port.
EXPOSE 3000

# Start the application.
CMD ["npm", "start"]
