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

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key,value) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}





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
    tokenCache={tokenCache} 
    publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}    >
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
