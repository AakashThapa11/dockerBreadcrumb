ARG NODE_VERSION=16.15.0
FROM node:${NODE_VERSION}-alpine

# Create a user with permissions to run the app
RUN addgroup app && adduser -S -G app app

# Set the user to run the app
USER app

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --ignore-scripts

# Copy the rest of the files to the working directory
COPY . .

# Change ownership of the /app directory to the 'app' user
USER root
RUN chown -R app:app /app

# Switch back to the 'app' user
USER app

# Expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 5173

# Command to run the app
CMD npm run dev