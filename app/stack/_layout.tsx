// app/stack/_layout.tsx
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';

const StackHeader = (title: string): NativeStackNavigationOptions => ({
  title,
  headerShown: true,
  headerTitleStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  headerTitleAlign: 'center', // ✅ now TypeScript knows it's one of the allowed strings
  headerStyle: {
    backgroundColor: '#FFFFFF',
  },
  headerRight: () => (
    <View style={{ marginRight: 12 }}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
    </View>
  ),
});

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="circulars" options={StackHeader('Circulars')} />
      <Stack.Screen name="attendance" options={StackHeader('Attendance')} />
      <Stack.Screen name="classwork" options={StackHeader('Classwork')} />
      <Stack.Screen name="fees" options={StackHeader('Fees')} />
      <Stack.Screen name="homework" options={StackHeader('Homework')} />
      <Stack.Screen name="results" options={StackHeader('Results')} />
      <Stack.Screen name="teachers" options={StackHeader('Teachers')} />
      <Stack.Screen name="students" options={StackHeader('Students')} />
    </Stack>
  );
}
