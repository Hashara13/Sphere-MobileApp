import React from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet } from 'react-native';
import { ColorsOptions } from '../constants/ColorsOptions';

const TextInput = ({ errorText, description, ...props }) => {
  return (
    <View style={styles.container}>
      <RNTextInput
        style={[
          styles.input,
          { borderColor: errorText ? ColorsOptions.red : ColorsOptions.dark },
        ]}
        selectionColor={ColorsOptions.dark}
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#000000',
    color: ColorsOptions.light,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  description: {
    fontSize: 13,
    color: ColorsOptions.light,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: ColorsOptions.light, 
    paddingTop: 8,
  },
});

export default TextInput;
