# Build frontend
FROM node:20.11.0 AS client-build
WORKDIR /app/client-fe
COPY ../client-fe/package*.json ./
RUN npm install
COPY ../client-fe ./
RUN npm run build

# Build backend
FROM node:20.11.0 AS server-build
WORKDIR /app/server
COPY package*.json ./
RUN npm install
COPY . .

# Copy built frontend into server build directory
COPY --from=client-build /app/client-fe/build ./build

# Build server (if you have a build step, otherwise skip)
RUN npm run build

EXPOSE 3030

CMD ["npm", "start"]