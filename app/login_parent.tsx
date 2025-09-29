import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";

import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginParent() {
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { setUser } = useUser();

  // 🔹 Dummy sign-in function for parents
  const onSignIn = async () => {
    if (!cnic || !password) {
      alert("Please enter CNIC and password");
      return;
    }

    setLoading(true);

    // Simulate backend delay
    setTimeout(async () => {
      setLoading(false);

      if (cnic === "1234" && password === "1234") {
        // Save dummy token + role
        await SecureStore.setItemAsync("userToken", "dummy-parent-token");
        await SecureStore.setItemAsync("userRole", "parent");

        // Update global context
        setUser({
          role: "parent",
          token: "dummy-parent-token",
          name: "Test Parent",
        });

        // Navigate to parent dashboard
        router.replace("/welcome_parent");
      } else {
        alert("Invalid credentials");
      }
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="flex-1 items-center px-4 pt-8">
        <Text className="text-center text-3xl font-bold text-blue-900 mt-10 mb-4">
          Paragon Public School
        </Text>

        <Image
          source={require("../assets/images/logoc.png")}
          className="w-30 h-40 self-center mb-6 rounded-lg"
          resizeMode="contain"
        />

        <View className="w-full mt-2">
          <Text className="text-gray-700 mb-1">CNIC No</Text>
          <TextInput
            value={cnic}
            onChangeText={setCnic}
            placeholder="Your CNIC Number"
            keyboardType="numeric"
            autoCapitalize="none"
            className="bg-gray-100 rounded-xl px-4 py-3 mb-4 border border-gray-200"
          />

          <Text className="text-gray-700 mb-1">Password</Text>
          <View className="relative">
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Your password"
              secureTextEntry={secure}
              className="bg-gray-100 rounded-xl px-4 py-3 pr-12 border border-gray-200"
            />
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              className="absolute right-3 top-3"
            >
              <MaterialIcons
                name={secure ? "visibility-off" : "visibility"}
                size={22}
                color="#4b5563"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity className="self-end mt-2">
            <Text className="text-blue-600">Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onSignIn}
            disabled={loading}
            className="mt-6 bg-blue-600 rounded-xl py-3 items-center"
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white text-base font-semibold">
                Sign In
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
