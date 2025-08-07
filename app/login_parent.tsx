// login_parent.tsx

import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginParent() {
  const [CNIC, setcnic] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const router = useRouter();

  const onSignIn = () => {
    if (!CNIC || !password) {
      alert("Please enter CNIC NO and password");
      return;
    }
    // Navigate to parent home or dashboard
    router.replace("/welcome_parent"); // You can change this to /parent/home if needed
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View className="flex-1 items-center px-4 pt-8">
        <Text className="text-center text-3xl font-bold text-blue-950 mt-10 mb-4">
          Paragon Public School
        </Text>

        <Image
          source={require("../assets/images/logoc.png")}
          className="w-30 h-40 self-center mb-6 rounded-lg"
          resizeMode="contain"
        />

        <View className="w-full mt-2">
          <Text className="text-gray-700 mb-1">CNIC NO</Text>
          <TextInput
            value={CNIC}
            onChangeText={setcnic}
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
            className="mt-6 bg-blue-600 rounded-xl py-3 items-center"
          >
            <Text className="text-white text-base font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
