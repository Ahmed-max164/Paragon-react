import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import { UserProvider } from "../contexts/UserContext";
import React from "react";

import "./globals.css";

// Navigation stack component
function AppStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="login_parent" />
      <Stack.Screen name="(tabs)" />

      <Stack.Screen
        name="welcome_parent"
        options={{
          headerShown: true,
          title: "Parent Dashboard",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#1e3a8a",
          },
          headerTintColor: "#000000",
          headerRight: () => (
            <View style={{ marginRight: 0 }}>
              <Image
                source={require("../assets/images/logo.png")}
                style={{ width: 50, height: 50, borderRadius: 18 }}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="welcome_teacher"
        options={{
          headerShown: true,
          title: "Teacher Dashboard",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#1e3a8a",
          },
          headerTintColor: "#000000",
          headerRight: () => (
            <View style={{ marginRight: 0 }}>
              <Image
                source={require("../assets/images/logo.png")}
                style={{ width: 50, height: 50, borderRadius: 18 }}
              />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <UserProvider>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <AppStack />
    </UserProvider>
  );
}
