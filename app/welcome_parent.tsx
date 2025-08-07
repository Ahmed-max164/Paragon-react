import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const children = [
  {
    id: 1,
    name: 'Ali Khan',
    grade: '5-A',
    campus: 'Campus 1',
    avatar: 'https://ui-avatars.com/api/?name=Ali+Khan',
  },
  {
    id: 2,
    name: 'Ayesha Khan',
    grade: '2-B',
    campus: 'Campus 2',
    avatar: 'https://ui-avatars.com/api/?name=Ali+Khan',
  },
];

const WelcomeParent = () => {
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

        {/* Child Cards */}
        <View className="px-4 mt-4">
          <Text className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Your Children
          </Text>

          {children.map((child) => (
            <TouchableOpacity
              key={child.id}
              className="bg-yellow-500 rounded-xl p-4 mb-4 flex-row items-center shadow-md border border-blue-200"
              activeOpacity={0.8}
               onPress={() => router.push("/home")}
            >
              <Image
                source={{ uri: child.avatar }}
                className="w-16 h-16 rounded-full mr-4"
              />
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">{child.name}</Text>
                <Text className="text-gray-600">Grade: {child.grade}</Text>
                <Text className="text-gray-600">Campus: {child.campus}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeParent;
