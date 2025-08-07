import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-4 pt-10">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        {/* Circular Image */}
         <Image
                  source={require('../assets/images/logo.png')} // make sure the path is correct
                  style={{ width: 50, height: 50, borderRadius: 18 }}
                />
        <Text className="text-2xl font-bold text-blue-900 pl-8">
          Paragon Public School
        </Text>
      </View>

      {/* Main content */}
      <View className="flex-1 justify-center items-center">
        {/* Centered Title */}
        <Text className="text-3xl font-bold text-blue-900 mb-10 text-center">
          Welcome to Paragon School System 
        </Text>

        {/* Button Grid with spacing */}
        <View className="flex-row gap-x-6">
          {/* Box 1 */}
          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="w-32 h-32 bg-blue-500 rounded-xl justify-center items-center border-2 border-blue-800"
          >
            <MaterialIcons name="login" size={36} color="white" />
            <Text className="text-white mt-2 font-semibold">Teacher</Text>
          </TouchableOpacity>

          {/* Box 2 */}
          <TouchableOpacity
            onPress={() => router.push("/login_parent")}
            className="w-32 h-32 bg-yellow-500 rounded-xl justify-center items-center border-2 border-yellow-700"
          >
            <MaterialIcons name="person-add" size={36} color="white" />
            <Text className="text-white mt-2 font-semibold">Parent</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
