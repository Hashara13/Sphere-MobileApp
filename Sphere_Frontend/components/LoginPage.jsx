import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { ColorsOptions } from "../constants/ColorsOptions";
import CustomButton from "../constants/CustomButton";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const LoginPage = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('(tabs)', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        console.log("OAuth flow successful:", createdSessionId);
        setActive({ session: createdSessionId });
      } else {
        console.log("OAuth flow failed or no session created");
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, [startOAuthFlow]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/imagenew.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Your ultimate companion for a{" "}
          <Text style={styles.boldText}>
            Seamless office experience{" "}
          </Text>
          with convenience & engagement.
        </Text>
      </View>
      <CustomButton onPress={onPress} text="Get Started" iconName="arrow-right-circle" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: "100%",
    height: 450,
    borderRadius: 20,
    borderColor: "transparent",
  },
  textContainer: {
    padding: 15,
    justifyContent: "center",
    marginTop: -30,
  },
  text: {
    color: ColorsOptions.light,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "NotoSans-Medium",
  },
  boldText: {
    color: ColorsOptions.TextBold,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "NotoSans-Bold",
  },
});

export default LoginPage;
