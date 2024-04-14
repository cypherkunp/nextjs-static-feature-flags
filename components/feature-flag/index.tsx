import { featureFlags } from '@/config/feature-flag.config';
import React from 'react';

interface FeatureProps {
  flagName: string;
  children: React.ReactNode;
  fallbackComponent?: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ flagName, fallbackComponent, children }) => {
  const feature = featureFlags[flagName as keyof typeof featureFlags];

  if (feature && feature.live && !feature.disable) {
    return <>{children}</>;
  } else {
    return <>{fallbackComponent || null}</>;
  }
};

export default Feature;
