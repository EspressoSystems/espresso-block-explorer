FROM node:20-alpine as builder

WORKDIR /app
COPY package.json package-lock.json /app/
COPY packages/espresso-block-explorer-components /app/packages/espresso-block-explorer-components
COPY packages/block-explorer /app/packages/block-explorer

RUN npm ci --no-audit --all-workspaces

# Build the Components Library
RUN npm run build --workspace=packages/espresso-block-explorer-components

# Copy over public, and asset files, then install again, for the block-explorer-components
RUN rm -rf packages/block-explorer/public && \
    cp -r packages/espresso-block-explorer-components/public packages/block-explorer/public && \
    cp -r packages/espresso-block-explorer-components/dist/assets packages/block-explorer/public/assets
RUN npm install --no-audit --save --workspace=packages/block-explorer packages/espresso-block-explorer-components/

# Build the Next Application
RUN npm run build --workspace=packages/block-explorer

FROM node:20-alpine
RUN apk add --no-cache bash jq

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json /app/
COPY --from=builder /app/packages/block-explorer/package.json /app/packages/block-explorer/
RUN NODE_ENV=production npm ci --only=production
COPY --from=builder /app/packages/block-explorer/.next /app/packages/block-explorer/.next
COPY --from=builder /app/packages/block-explorer/public/ /app/packages/block-explorer/public/
COPY docker/init.sh /app/init.sh

# The configuration for the pre-built block-explorer is specified by
# a file named config.json contained within the public folder of the
# docker image.  By default the value `hotshot_query_service_url` is
# stored as `null` which will indicate to use the fake generated data.
# To use the real data, the `hotshot_query_service_url` should be set
# to a valid URL of the hotshot query service.
#
# Example:
#   "https://query.gibraltar.aws.espresso.network/"

EXPOSE 3000
ENV HOST=0.0.0.0
ENV QUERY_SERVICE_URI=""

CMD ./init.sh
