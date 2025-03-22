FROM node:18.20-bullseye-slim AS base
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm ci --only=production && \
    # Limpiar caché de npm para reducir tamaño
    npm cache clean --force && \
    # Instalar devDependencies solo para Prisma
    npm install --no-save prisma

FROM base AS builder
WORKDIR /app
# Copiar solo node_modules de producción
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/prisma ./prisma
COPY . .

# Variables de entorno para Prisma
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
ENV NODE_ENV=production

# Generar cliente Prisma y construir la aplicación
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/@prisma ./node_modules/@prisma
RUN rm -rf /app/node_modules/.cache || true && \
    # Crear enlaces simbólicos en lugar de copiar archivos grandes si es posible
    find /app -type f -name "*.map" -delete

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]