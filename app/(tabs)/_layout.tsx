import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image,View } from 'react-native';

const _layout = () => {
  return (
    <Tabs>
      {/* Home Screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Profile Screen */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />

      {/* Home (second one) — consider renaming if index is already Home */}
     <Tabs.Screen
  name="home"
  options={{
    title: 'Home',
    headerShown: false,
    headerLeft: () => (
      <View style={{ marginLeft: 16 }}>
        <Image
          source={require('../../assets/images/logo.png')} // make sure the path is correct
          style={{ width: 50, height: 50, borderRadius: 18 }}
        />
      </View>
    ),
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="home" size={size} color={color} />
    ),
  }}
/>

      {/* Settings Screen */}
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
