#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Print a message to indicate the script has started
echo "🚀 Starting hueneu application setup..."

# Navigate to the project directory if the script is not run from there
# Assuming the script is in the root of the project, so no cd needed

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the Next.js project
echo "🛠️ Building the project..."
npm run build

# Start the Next.js application on port 9000
# The package.json start script is already configured for port 9000: "next start -p 9000"
echo "🌐 Launching hueneu on http://localhost:9000 ..."
npm run start
