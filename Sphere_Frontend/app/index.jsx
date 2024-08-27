import { Redirect, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo"; 

export default function Index() {
  const { user } = useUser();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    CheckNavLoaded();
  }, [rootNavigationState.key]);

  const CheckNavLoaded = () => {
    if (!rootNavigationState.key) {
      return null; 
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {user ? (
        <Redirect href={'(tabs)'} />
      ) : (
        <Redirect href={'/(LoginPage)'} />
      )}
    </View>
  );
}
