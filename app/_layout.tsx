import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import './globals.css';

export default function RootLayout() {
  return (
    
      <><StatusBar style="dark" backgroundColor="#ffffff" /><Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack></>
  
  );
};