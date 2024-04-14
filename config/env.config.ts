export function getEnv(envVariableName: string) {
  try {
    switch (envVariableName) {
      case 'NEXT_PUBLIC_SITE_FEATURE_FLAGS':
        return process.env.NEXT_PUBLIC_SITE_FEATURE_FLAGS ?? '';
      case 'NEXT_PUBLIC_ENV':
        return process.env.NEXT_PUBLIC_ENV ?? '';
    }
  } catch (error) {
    return '';
  }
}
