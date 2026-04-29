#!/bin/bash

# Run the file generation script to create the initial config, and transform
# the environment variables.
./block-explorer-generate-files.sh

# Start nginx in the foreground.
exec nginx -g 'daemon off;'
