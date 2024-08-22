import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  ClerkProvider,
  ClerkLoaded,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import * as SecureStore from 'expo-secure-store'
import LoginPage from "../components/LoginPage";



export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "NotoSans-Bold": require("./../assets/fonts/NotoSans_Condensed-Bold.ttf"),
    "NotoSans-Medium": require("./../assets/fonts/NotoSans_Condensed-Medium.ttf"),
    "NotoSans-Regular": require("./../assets/fonts/NotoSans_Condensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider
 
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <SignedIn>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginPage />
      </SignedOut>
    </ClerkProvider>
  );
}
