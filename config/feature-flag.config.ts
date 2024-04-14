import { FeatureFlag, withEnvFlags } from './feature-flag.utils';

const featureFlagsConfig: FeatureFlag = {
  'new-header': {
    live: false, // false means only avaible on non prod env
    disable: false, // true means disable the feature from all deployments
  },
};

export const featureFlags = withEnvFlags(featureFlagsConfig);
