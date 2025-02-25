FROM node:18.20-bullseye-slim AS builder

# Set working directory
WORKDIR /app

# Permitir pasar DATABASE_URL como argumento
ARG DATABASE_URL
# Establecer DATABASE_URL en el entorno de build
ENV DATABASE_URL=${DATABASE_URL}

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./
COPY .env ./

# Install dependencies
RUN npm install

# Copy all source code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Production image
FROM node:18.20-bullseye-slim AS production

# Set working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./

# Expose the port that the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]