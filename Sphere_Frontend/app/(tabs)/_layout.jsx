import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ColorsOptions } from '../../constants/ColorsOptions';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: ColorsOptions.TabActive,
    }}>
      <Tabs.Screen 
        name="Home" 
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name="Services" 
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="food-fork-drink" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name="GameHub" 
        options={{
          tabBarIcon: ({ color }) => <Entypo name="game-controller" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name="Wallet" 
        options={{
          tabBarIcon: ({ color }) => <Entypo name="wallet" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name="Profile" 
        options={{
          tabBarIcon: ({ color }) => <Entypo name="user" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
