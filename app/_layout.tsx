import { useFonts } from '@expo-google-fonts/inter';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    SpicyRice: require('../assets/fonts/SpicyRice-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.push("/characterPick");

    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        'headerShown': false,
        'animation': 'none'
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="fastFact" />
      <Stack.Screen name="web" />
      <Stack.Screen name="characterPick" />
    </Stack>
  );
}
