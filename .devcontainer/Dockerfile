# Use the official Node.js image as base
FROM mcr.microsoft.com/devcontainers/javascript-node:22

# Install additional packages (git is already included in the base image)
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        curl \
        wget \
        unzip \
        ca-certificates \
        && apt-get autoremove -y && apt-get clean -y

# Set up the working directory
WORKDIR /workspace

# Copy package files for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci


# Expose ports for development
EXPOSE 3000 5173 6006

# Set the default user
USER node