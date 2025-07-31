import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const router = useRouter();

  const onSignIn = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    // TODO: replace with real auth
    router.replace("./(tabs)/home"); // go to tabs after login
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="flex-1 items-center px-4 pt-8">
        {/* Title */}
        <Text className="text-center text-3xl font-bold text-blue-950 mt-10 mb-4">
          Paragon Public School
        </Text>

        {/* Logo */}
        <Image
          source={require("../assets/images/logoc.png")}
          className="w-30 h-40 self-center mb-6 rounded-lg"
          resizeMode="contain"
        />

        {/* Login form */}
        <View className="w-full mt-2">
          {/* Email */}
          <Text className="text-gray-700 mb-1">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-gray-100 rounded-xl px-4 py-3 mb-4 border border-gray-200"
          />

          {/* Password with eye toggle */}
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

          {/* Forgot password (optional) */}
          <TouchableOpacity className="self-end mt-2">
            <Text className="text-blue-600">Forgot password?</Text>
          </TouchableOpacity>

          {/* Sign In button */}
          <TouchableOpacity
            onPress={onSignIn}
            className="mt-6 bg-blue-600 rounded-xl py-3 items-center"
          >
            <Text className="text-white text-base font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
