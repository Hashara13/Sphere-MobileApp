import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TextInput from '../components/TextInput'

const LoginPage = () => {
  return (
    <View style={styles.container}>
        <Header/>
      <Text>LoginPage</Text>
      <TextInput
        label="Email"
        returnKeyType="next"
        // value={email.value}
        // onChangeText={(text) => setEmail({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        // value={password.value}
        // onChangeText={(text) => setPassword({ value: text, error: '' })}
        // error={!!password.error}
        // errorText={password.error}
        secureTextEntry
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "flex-start",
      paddingLeft:'10px',
      marginTop: 20,
    },

  });
  
export default LoginPage