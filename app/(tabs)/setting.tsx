import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

   const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => router.replace("/") }
      ]
    );
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
      >
        {/* Profile Section */}
        <View className="items-center mb-6">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            className="w-20 h-20 rounded-full mb-2"
          />
          <Text className="text-lg font-semibold text-gray-800">John Doe</Text>
          <Text className="text-sm text-gray-500">Class 10 • Roll No: RN-105</Text>
        </View>

        {/* General Settings */}
        <View className="bg-gray-100 p-4 rounded-2xl mb-4">
          <Text className="text-base font-semibold mb-2 text-gray-700">General</Text>

          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-gray-600">Dark Mode</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="text-gray-600">Language</Text>
            <Text className="text-blue-600">English</Text>
          </View>
        </View>

        {/* Notifications */}
        <View className="bg-gray-100 p-4 rounded-2xl mb-4">
          <Text className="text-base font-semibold mb-2 text-gray-700">Notifications</Text>

          <View className="flex-row justify-between items-center">
            <Text className="text-gray-600">Enable Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>
        </View>

        {/* Security */}
        <View className="bg-gray-100 p-4 rounded-2xl mb-4">
          <Text className="text-base font-semibold mb-2 text-gray-700">Security</Text>

          <TouchableOpacity className="py-2">
            <Text className="text-blue-600">Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-2">
            <Text className="text-blue-600">Enable 2FA</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity className="bg-red-500 p-4 rounded-2xl items-center"
           onPress={handleLogout}>
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Settings;
