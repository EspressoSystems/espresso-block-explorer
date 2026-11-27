// Config keys and the environment variables that override them in dev.
const envVars: Record<string, string> = {
  ENVIRONMENT_NAME: 'ENVIRONMENT_NAME',
  hotshot_query_service_url: 'QUERY_SERVICE_URI',
  node_validator_service_url: 'NODE_VALIDATOR_URI',
  staking_api_service_url: 'STAKING_UI_SERVICE_URI',
  CONTRACT_ADDRESS_STAKE_TABLE: 'CONTRACT_ADDRESS_STAKE_TABLE',
  CONTRACT_ADDRESS_ESP_TOKEN: 'CONTRACT_ADDRESS_ESP_TOKEN',
  CONTRACT_ADDRESS_REWARD_CLAIM: 'CONTRACT_ADDRESS_REWARD_CLAIM',
  CONTRACT_ADDRESS_LIGHT_CLIENT: 'CONTRACT_ADDRESS_LIGHT_CLIENT',
  WALLETCONNECT_PROJECT_ID: 'WALLETCONNECT_PROJECT_ID',
  RPC_URLS: 'RPC_URLS',
  PROOF_OF_STAKE_RELEASED: 'PROOF_OF_STAKE_RELEASED',
  BASE_URL: 'BASE_URL',
  BASE_PATH: 'BASE_PATH',
  VALIDATOR_HISTORY_URL: 'VALIDATOR_HISTORY_URL',
};

// Keys that belong to one network, so they are never carried to another.
const networkKeys = [
  'hotshot_query_service_url',
  'node_validator_service_url',
  'staking_api_service_url',
  'CONTRACT_ADDRESS_STAKE_TABLE',
  'CONTRACT_ADDRESS_ESP_TOKEN',
  'CONTRACT_ADDRESS_REWARD_CLAIM',
  'CONTRACT_ADDRESS_LIGHT_CLIENT',
  'RPC_URLS',
  'PROOF_OF_STAKE_RELEASED',
  'BASE_URL',
];

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // During development, write public/config.json so the client can fetch it
    // as a static file. This runs once when the dev server starts, before any
    // requests are served.
    //
    // In production the container entrypoint writes this file instead, so we
    // skip it here to avoid overwriting the correct runtime values with the
    // empty build-time environment. (Next 16 doesn't set NEXT_PHASE here.)
    if (process.env.NODE_ENV === 'development') {
      const { copyFileSync, existsSync, readFileSync, writeFileSync } =
        await import('fs');
      const { join } = await import('path');

      // The developer's saved settings live outside public/, so they are never
      // served or exported, and this code never writes to them after creating
      // them from the Decaf example.
      const localPath = join(process.cwd(), 'config.local.json');
      if (!existsSync(localPath)) {
        copyFileSync(
          join(process.cwd(), 'public', 'config.example.json'),
          localPath,
        );
      }
      const saved = JSON.parse(readFileSync(localPath, 'utf8'));
      const config: Record<string, string> = { ...saved };

      // Switching networks drops the saved network's values, so the two
      // networks never mix. Anything not set below stays empty (fake data or
      // disabled actions).
      const network = process.env.ENVIRONMENT_NAME;
      if (network && network !== saved.ENVIRONMENT_NAME) {
        for (const key of networkKeys) {
          config[key] = '';
        }
      }

      // Environment variables override the saved settings for this run only.
      // An empty variable, such as a blank ENVIRONMENT_NAME= line in an env
      // file, counts as unset and keeps the saved value.
      const overridden: string[] = [];
      for (const [key, envVar] of Object.entries(envVars)) {
        const value = process.env[envVar];
        if (value) {
          config[key] = value;
          overridden.push(envVar);
        }
      }

      writeFileSync(
        join(process.cwd(), 'public', 'config.json'),
        JSON.stringify(config, null, 2),
      );
      console.log(
        `config.json: ${config.ENVIRONMENT_NAME} from config.local.json` +
          (overridden.length ? `, overridden by ${overridden.join(', ')}` : ''),
      );
    }
  }
}
