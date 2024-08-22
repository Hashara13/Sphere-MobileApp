import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Link } from "expo-router";
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
      })

      if (createdSessionId) {
      } else {
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: 100,
      }}
    >
      <Image
        source={require("../assets/images/imagenew.png")}
        style={{
          width: "100%",
          height: 450,
          paddingLeft: "20px",
          borderRadius: 20,
          borderColor: "transparent",
        }}
      />
      <View
        style={{
          padding: 15,
          justifyContent: "center",
          marginTop: -30,
        }}
      >
        <Text
          style={{
            color: ColorsOptions.light,
            fontSize: 25,
            textAlign: "center",
            fontFamily: "NotoSans-Medium",
          }}
        >
          Your ultimate companion for a{" "}
          <Text
            style={{
              color: ColorsOptions.TextBold,
              fontSize: 30,
              textAlign: "center",
              fontFamily: "NotoSans-Bold",
            }}
          >
            Seamless office experience{" "}
          </Text>
          With convenience & engagement.
        </Text>
      </View>
      <CustomButton onPress={onPress} text="Get Started" iconName="arrow-right-circle" />
    </View>
  );
};

export default LoginPage;
