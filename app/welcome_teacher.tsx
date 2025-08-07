import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
const classes = ['1', '2', '3', '4', '5-A', '5-B', '6', '7', '8', '9', '10'];

const WelcomeTeacher = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  const handleClassPress = (className) => {
    Alert.alert('Selected Class', `You clicked on class ${className} (${selectedGroup})`);
    // Add navigation or logic here
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header Section */}
        <View className="bg-blue-200 p-6">
          <Text className="text-center text-3xl font-bold text-blue-900 mb-4">
            Paragon Public School
          </Text>
          <Image
            source={require('../assets/images/logoc.png')}
            className="w-30 h-40 self-center mb-6 rounded-lg"
            resizeMode="contain"
          />
        </View>

        {/* Campus Selection */}
        <View className="flex-row justify-center mt-6 px-4">
          <TouchableOpacity
            onPress={() => handleGroupSelect('Campus 1')}
            className={`flex-1 mx-2 border rounded-lg px-6 py-4 ${
              selectedGroup === 'Campus 1' ? 'bg-green-500' : 'bg-white'
            } border-green-900 items-center`}
          >
            <Text
              className={`text-lg font-semibold ${
                selectedGroup === 'Campus 1' ? 'text-white' : 'text-gray-700'
              }`}
            >
              Campus 1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleGroupSelect('Campus 2')}
            className={`flex-1 mx-2 border rounded-lg px-6 py-4 ${
              selectedGroup === 'Campus 2' ? 'bg-green-500' : 'bg-white'
            } border-green-900 items-center`}
          >
            <Text
              className={`text-lg font-semibold ${
                selectedGroup === 'Campus 2' ? 'text-white' : 'text-gray-700'
              }`}
            >
              Campus 2
            </Text>
          </TouchableOpacity>
        </View>

        {/* Class Cards */}
        {selectedGroup && (
          <View className="p-4">
            {classes.map((className, index) => (
             <TouchableOpacity
  key={index}
        onPress={() => router.push("/home")}
  className={`border border-yellow-900 rounded-2xl p-5 mb-4 w-full items-center bg-yellow-500 shadow-md`}
>
  <MaterialCommunityIcons
  name="school"
  size={28}
  color="#4B5563"
  style={{ marginBottom: 8 }}
/>
  <Text className="text-xl font-bold text-gray-800">{`Class ${className}`}</Text>
</TouchableOpacity>

            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default WelcomeTeacher;
