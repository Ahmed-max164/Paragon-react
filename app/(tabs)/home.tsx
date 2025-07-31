import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const cards = [
  { id: '1', label: 'Classwork', icon: 'menu-book', bg: 'bg-red-200' },
  { id: '2', label: 'Students', icon: 'people', bg: 'bg-green-200' },
  { id: '3', label: 'Teachers', icon: 'school', bg: 'bg-blue-200' },
  { id: '4', label: 'Attendance', icon: 'event-available', bg: 'bg-yellow-200' },
  { id: '5', label: 'Homework', icon: 'book', bg: 'bg-indigo-200' },
  { id: '6', label: 'Results', icon: 'grading', bg: 'bg-pink-200' },
  { id: '7', label: 'Fees', icon: 'attach-money', bg: 'bg-amber-200' },
  { id: '8', label: 'Settings', icon: 'settings', bg: 'bg-gray-200' },
  { id: '9', label: 'Circulars', icon: 'notifications',bg:'bg-pink-200'}
];

const Home = () => {
  return (
    <View className="flex-1 p-1 bg-white">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Title */}
        <Text className="text-center text-3xl font-bold text-blue-950 mt-10 mb-4">
          Paragon Public School
        </Text>

        {/* Logo */}
        <Image
          source={require('../../assets/images/logoc.png')}
          className="w-30 h-40 self-center mb-6 rounded-lg"
          resizeMode="contain"
        />

        {/* Cards Grid */}
        <View className="flex-row flex-wrap justify-between">
          {cards.map((item) => (
            <TouchableOpacity
              key={item.id}
              className={`w-[48%] rounded-xl mb-4 p-8 items-center ${item.bg}`}
            >
              <MaterialIcons name={item.icon} size={36} color="#333" />
              <Text className="mt-2 text-center text-base font-medium text-black">
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
