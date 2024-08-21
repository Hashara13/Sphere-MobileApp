import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'NotoSans-Bold': require('../assets/fonts/static/NotoSans-Bold.ttf'),
    'NotoSans-Medium': require('../assets/fonts/static/NotoSans-Medium.ttf'),
    'NotoSans-Regular': require('../assets/fonts/static/NotoSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
