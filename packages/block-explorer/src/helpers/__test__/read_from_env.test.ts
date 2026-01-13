import { Environment } from 'espresso-block-explorer-components';
import { describe, expect, it } from 'vitest';
import { readFromEnv } from '../read_from_env';

describe('Reader From ENV', () => {
  it('should resolve environment from ENVIRONMENT_NAME', () => {
    process.env.ENVIRONMENT_NAME = 'decaf';

    expect(readFromEnv()).to.deep.equal({
      environment: Environment.decaf,
    });

    process.env.ENVIRONMENT_NAME = 'milk';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.milk,
    });

    process.env.ENVIRONMENT_NAME = 'water';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.water,
    });

    process.env.ENVIRONMENT_NAME = 'mainnet';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.mainnet,
    });
  });
});
