import { getEnv } from './env.config';

// comma separated list of feature flag names
const configuredFeatureFlags = process.env.NEXT_PUBLIC_SITE_FEATURE_FLAGS ?? '';

export interface FeatureFlag {
  [key: string]: {
    live: boolean;
    disable: boolean;
    queryList?: [string];
  };
}

const isProd = () => getEnv('NEXT_PUBLIC_ENV') === 'prod';

export function withEnvFlags(featureFlagConfig: FeatureFlag): FeatureFlag {
  const featureFlags = configuredFeatureFlags.split(',').map(flag => flag.trim());

  featureFlags.forEach(flagName => {
    if (featureFlags.includes(flagName)) {
      featureFlagConfig[flagName] = {
        ...featureFlagConfig[flagName],
        live: !isProd(),
      };
    }
  });

  return featureFlagConfig;
}
