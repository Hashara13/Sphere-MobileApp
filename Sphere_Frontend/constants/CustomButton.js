import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ColorsOptions } from './ColorsOptions';

const CustomButton = ({ text, iconName, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.content}>
          <Text style={styles.text}>{text}</Text>
          <Feather name={iconName} size={24} color="black" />
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: ColorsOptions.TabActive,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      width:'80%',
      marginTop: 10,
      borderRadius: 15,
      borderColor: ColorsOptions.light.background,
      borderWidth: 1,
      shadowColor: '#222',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 6,
      elevation: 6,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
    },
    text: {
      fontSize: 16,
      marginRight: 10,
    },
  });
  
  export default CustomButton;