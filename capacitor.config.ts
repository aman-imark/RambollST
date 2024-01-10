import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ramboll.RambollST',
  appName: 'HealthCity Novena: Staff Pilot',
  webDir: 'www',
  bundledWebRuntime: false,
  loggingBehavior: 'none',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      androidScaleType: "CENTER_CROP",
      splashImmersive: true,
      backgroundColor: "#ffffff",
      showSpinner: false,
      androidSplashResourceName: "splash",

      // layoutName: "launch_screen",
      // useDialog: true
    }
  }
};

export default config;
