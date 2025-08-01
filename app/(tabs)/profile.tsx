import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Profile Image */}
        <View className="items-center mt-8 mb-4">
          <View className="w-32 h-32 rounded-full overflow-hidden">
            <Image
              source={require('../../assets/images/logo.png')} // replace with your image
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          <Text className="mt-4 text-xl font-semibold text-blue-950">Maharuk Mubashir</Text>
          <Text className="text-sm text-gray-500">Student</Text>
        </View>

        {/* Info Cards */}
        <View className="bg-blue-100 p-4 rounded-xl mb-4">
  <Text>
    <Text className="font-bold text-blue-900">Father name: </Text>
    <Text className="text-blue-900">Mubashir Sajid</Text>
  </Text>
  <View className="h-px bg-blue-300 my-2" />

  <Text>
    <Text className="font-bold text-blue-900">Class: </Text>
    <Text className="text-blue-900">kindergarten</Text>
  </Text>
  <View className="h-px bg-blue-300 my-2" />

  <Text>
    <Text className="font-bold text-blue-900">Roll No: </Text>
    <Text className="text-blue-900">14</Text>
  </Text>
  <View className="h-px bg-blue-300 my-2" />

  <Text>
    <Text className="font-bold text-blue-900">GR No: </Text>
    <Text className="text-blue-900">05541</Text>
  </Text>
  <View className="h-px bg-blue-300 my-2" />

  <Text>
    <Text className="font-bold text-blue-900">Campus: </Text>
    <Text className="text-blue-900">PECHS block 1 Karachi</Text>
  </Text>
  <View className="h-px bg-blue-300 my-2" />
</View>


       

        <View className="bg-yellow-100 p-4 rounded-xl mb-4">
 <Text>
    <Text className="font-bold text-yellow-900">Department: </Text>
    <Text className="text-yellow-800">Science</Text>
  </Text>
  {/* Divider */}
  <View className="h-px bg-yellow-300 my-2" />
<Text>
    <Text className="font-bold text-yellow-900">Department: </Text>
    <Text className="text-yellow-800">Science</Text>
  </Text>
   {/* Divider */}
  <View className="h-px bg-yellow-300 my-2" />
  <Text>
    <Text className="font-bold text-yellow-900">Department: </Text>
    <Text className="text-yellow-800">Science</Text>
  </Text>
   {/* Divider */}
  <View className="h-px bg-yellow-300 my-2" />
  <Text>
    <Text className="font-bold text-yellow-900">Department: </Text>
    <Text className="text-yellow-800">Science</Text>
  </Text>
   {/* Divider */}
  <View className="h-px bg-yellow-300 my-2" />
  <Text>
    <Text className="font-bold text-yellow-900">Department: </Text>
    <Text className="text-yellow-800">Science</Text>
  </Text>
   {/* Divider */}
  <View className="h-px bg-yellow-300 my-2" />
</View>

      </ScrollView>
    </View>
  );
};

export default Profile;
