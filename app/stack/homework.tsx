import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const homeworkList = [
  {
    id: 1,
    subject: 'Mathematics',
    title: 'Complete exercises 5 to 10 from Chapter 3',
    dueDate: 'Due: Aug 5, 2025',
    status: 'Pending',
  },
  {
    id: 2,
    subject: 'English',
    title: 'Write an essay on climate change',
    dueDate: 'Due: Aug 6, 2025',
    status: 'Completed',
  },
  {
    id: 3,
    subject: 'Science',
    title: 'Prepare notes on the solar system',
    dueDate: 'Due: Aug 7, 2025',
    status: 'Pending',
  },
];

const Homework = () => {
  return (
    <View className="flex-1 p-4 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* 👇 Top Section with Title and Red Card */}

        <View className="bg-blue-500 rounded-2xl p-6 mb-8 justify-center items-center ">
           <Text className="text-3xl font-bold text-white mb-2 mt-2"> Homework Diary</Text>
          <Image
            source={{
              uri: 'https://cdn.theatlantic.com/thumbor/b32faVK23Qy1XV5m8hVUgMHKnBQ=/0x0:2000x1125/1600x900/media/img/mt/2021/04/atlantic12/original.jpg',
            }}
            className="w-24 h-24 mb-6"
            resizeMode="contain"
          />

        </View>

        {/* 👇 Homework Cards */}
        {homeworkList.map((hw) => (
          <View
            key={hw.id}
            className="bg-blue-50 p-4 rounded-2xl mb-4 shadow-sm"
          >
            <Text className="text-lg font-semibold text-blue-900">
              {hw.subject}
            </Text>
            <Text className="text-base text-red-800 mt-1">{hw.title}</Text>
            <View className="flex-row justify-between mt-2">
              <Text className="text-sm text-gray-500">{hw.dueDate}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Homework;
