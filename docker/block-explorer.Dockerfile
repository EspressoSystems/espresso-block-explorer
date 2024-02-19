FROM node:20-alpine as builder

WORKDIR /app
COPY package.json package-lock.json /app/
COPY packages/espresso-block-explorer-components /app/packages/espresso-block-explorer-components
COPY packages/block-explorer /app/packages/block-explorer

RUN npm ci --no-audit --all-workspaces

# Build the Components Library
RUN npm run build --workspace=packages/espresso-block-explorer-components

# Install again, for the block-explorer-components
RUN npm install --all-workspaces

# Build the Next Application
RUN npm run build --workspace=packages/block-explorer

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json /app/
COPY --from=builder /app/packages/block-explorer/package.json /app/packages/block-explorer/
RUN NODE_ENV=production npm ci --only=production
COPY --from=builder /app/packages/block-explorer/.next /app/packages/block-explorer/.next
COPY --from=builder /app/packages/block-explorer/public/ /app/packages/block-explorer/public/

EXPOSE 3000
ENV HOST=0.0.0.0

ENTRYPOINT ["npm", "run", "start", "--workspace=packages/block-explorer"]
