import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bulletcontrol.game',
  appName: 'Bullet Control',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#0a0a0f'
  },
  ios: {
    backgroundColor: '#0a0a0f'
  }
};

export default config;
