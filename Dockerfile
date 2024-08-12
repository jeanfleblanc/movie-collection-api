FROM node:20.16.0-slim
USER root
WORKDIR /usr/app
COPY package.json ./
COPY . .
COPY --chown=node:node package-lock.json ./

# Install only runtime dependencies
ENV NODE_ENV=production
RUN cat .npmrc
RUN npm install
RUN rm -f .npmrc

# Copy built app from builder
EXPOSE 5100 
ENTRYPOINT node src/index.js
##### END STEP 2 #####