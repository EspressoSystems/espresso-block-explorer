export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // During development, write public/config.json from the current environment
    // variables so the client can fetch it as a static file. This runs once
    // when the dev server starts, before any requests are served.
    //
    // In production the container entrypoint writes this file instead, so we
    // skip it here to avoid overwriting the correct runtime values with the
    // empty build-time environment.
    if (process.env.NEXT_PHASE === 'phase-development-server') {
      const { writeFileSync } = await import('fs');
      const { join } = await import('path');

      const config = {
        ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME ?? '',
        CONTRACT_ADDRESS_STAKE_TABLE:
          process.env.CONTRACT_ADDRESS_STAKE_TABLE ?? '',
        CONTRACT_ADDRESS_ESP_TOKEN:
          process.env.CONTRACT_ADDRESS_ESP_TOKEN ?? '',
        CONTRACT_ADDRESS_REWARD_CLAIM:
          process.env.CONTRACT_ADDRESS_REWARD_CLAIM ?? '',
        CONTRACT_ADDRESS_LIGHT_CLIENT:
          process.env.CONTRACT_ADDRESS_LIGHT_CLIENT ?? '',
        WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID ?? '',
        RPC_URLS: process.env.RPC_URLS ?? '',
        PROOF_OF_STAKE_RELEASED: process.env.PROOF_OF_STAKE_RELEASED ?? '',
        BASE_URL: process.env.BASE_URL ?? '',
        BASE_PATH: process.env.BASE_PATH ?? '',
      };

      const configPath = join(process.cwd(), 'public', 'config.json');
      writeFileSync(configPath, JSON.stringify(config, null, 2));
    }
  }
}
