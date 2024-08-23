FROM node:20.10.0-alpine

WORKDIR /usr/src/app
COPY . .

# Install only runtime dependencies
ENV NODE_ENV=production
RUN npm install

# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD [ "node", "src/index.js" ]
