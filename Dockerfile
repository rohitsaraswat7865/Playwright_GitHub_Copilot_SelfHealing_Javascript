# Use official Playwright image as base
FROM mcr.microsoft.com/playwright:v1.59.1-jammy

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Playwright browsers
RUN npx playwright install

# Copy entire project
COPY . .

# Set environment variable for CI mode
ENV CI=true

# Expose port for reports (optional)
EXPOSE 9323

# Default command to run tests
CMD ["npm", "test"]
