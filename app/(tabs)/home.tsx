import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';

const cards = [
  { id: '1', label: 'Attendance', icon: 'event-available', iconSet: 'material', bg: 'bg-amber-200', href: '/stack/attendance' },
  { id: '2', label: 'Circulars', icon: 'notifications', iconSet: 'material', bg: 'bg-amber-200', href: '/stack/circulars' },
  { id: '3', label: 'Classwork', icon: 'menu-book', iconSet: 'material', bg: 'bg-amber-200', href: '/stack/classwork' },
  { id: '4', label: 'Homework', icon: 'book', iconSet: 'material', bg: 'bg-amber-200', href: '/stack/homework' },
  { id: '5', label: 'Teachers', icon: 'school', iconSet: 'material', bg: 'bg-amber-200', href: '/stack/teachers' },
  { id: '6', label: 'Students', icon: 'people', iconSet: 'material', bg: 'bg-amber-200', href: '/stack/students' },
  { id: '7', label: 'Class Results', icon: 'medal', iconSet: 'community', bg: 'bg-amber-200', href: '/stack/class_test_resut' }, // 🏆
  { id: '8', label: 'Term Results', icon: 'trophy', iconSet: 'community', bg: 'bg-amber-200', href: '/stack/term_results' }, // 🏆
  { id: '9', label: 'Fees', icon: 'attach-money', iconSet: 'material', bg: 'bg-amber-200', href: '/stack/fees' },
  { id: '10', label: 'Feedback', icon: 'rate-review', iconSet: 'material', bg: 'bg-amber-200', href: '/stack/feedback' }
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
        <Text className="text-center text-3xl font-bold text-blue-900 mt-10 mb-4">
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
    <Link key={item.id} href={item.href} asChild>
      <TouchableOpacity
        accessibilityRole="button"
        className={`w-[48%] rounded-xl mb-4 p-8 items-center ${item.bg}`}
      >
        {item.iconSet === 'community' ? (
          <MaterialCommunityIcons name={item.icon} size={36} color="#1e3a8a" />
        ) : (
          <MaterialIcons name={item.icon} size={36} color="#1e3a8a" />
        )}
        <Text className="mt-2 text-center text-base font-medium text-blue-900">
          {item.label}
        </Text>
      </TouchableOpacity>
    </Link>
  ))}
</View>


      </ScrollView>
    </View>
  );
};

export default Home;
