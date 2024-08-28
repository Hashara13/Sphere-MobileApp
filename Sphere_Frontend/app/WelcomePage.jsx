import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ColorsOptions } from "../constants/ColorsOptions";
import CustomButton from "../constants/CustomButton";


const WelcomePage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/imagenew.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Your ultimate companion for a{" "}
          <Text style={styles.boldText}>Seamless office experience </Text>
          with convenience & engagement.
        </Text>
      </View>
      <CustomButton
        onPress={() => router.push('LoginPage')}
        text="Get Started"
        iconName="arrow-right-circle"
      />
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
    fontSize: 25,
    textAlign: "center",
    fontFamily: "NotoSans-Medium",
  },
  boldText: {
    fontSize: 30,
    color:ColorsOptions.TabActive,
    textAlign: "center",
    fontFamily: "NotoSans-Bold",
  },
});

export default WelcomePage;
