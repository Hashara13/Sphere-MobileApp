import { View, Text, Image, TouchableOpacity,StyleSheet  } from 'react-native';
import React from 'react';
import { ColorsOptions } from '../constants/ColorsOptions';
import CustomButton from '../constants/CustomButton';




const LoginPage = () => {
  

  return (
    <View style={{
      display:'flex',
      alignItems:'center',
      marginTop:100,

    }}>
      <Image
        source={require('../assets/images/imagenew.png')}
        style={{
          width: "100%",
          height: 450,
          paddingLeft:'20px',
          borderRadius: 20,
          borderColor: 'transparent'
        }}
      />
      <View style={{
        padding:15,
        justifyContent:'center',
        marginTop:-30,
      }}>
<Text style={{
  color:ColorsOptions.light,
  fontSize:25,
textAlign:'center',
fontFamily:'NotoSans-Medium',
  
}}>
Your ultimate companion for a <Text style={{
  color:ColorsOptions.TextBold,
  fontSize:30,
textAlign:'center',
fontFamily:'NotoSans-Bold',


  
}}>Seamless office experience<br></br></Text>With convenience & engagement.
</Text>
      </View>
      <CustomButton
        text="Get Started"
        iconName="arrow-right-circle"
      />
    </View>
  );
}

export default LoginPage;
