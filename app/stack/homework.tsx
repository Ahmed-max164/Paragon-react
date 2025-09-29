import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useUser } from '../../contexts/UserContext'; // ✅ your existing context

const initialHomeworkList = [
  {
    id: 1,
    subject: 'Mathematics',
    title: 'Complete exercises 5 to 10 from Chapter 3',
    dueDate: 'Due: Aug 5, 2025',
    dateAdded: 'Added: Aug 1, 2025',
  },
  {
    id: 2,
    subject: 'English',
    title: 'Write an essay on climate change',
    dueDate: 'Due: Aug 6, 2025',
    dateAdded: 'Added: Aug 2, 2025',
  },
  {
    id: 3,
    subject: 'Science',
    title: 'Prepare notes on the solar system',
    dueDate: 'Due: Aug 7, 2025',
    dateAdded: 'Added: Aug 3, 2025',
  },
];

const Homework = () => {
  const { user } = useUser(); // ✅ get logged-in user role
  const [homeworkList, setHomeworkList] = useState(initialHomeworkList);

  const [subject, setSubject] = useState('');
  const [homeworkText, setHomeworkText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addHomework = () => {
    if (!subject.trim() || !homeworkText.trim() || !dueDate.trim()) return;

    const newHomework = {
      id: Date.now(),
      subject: subject.trim(),
      title: homeworkText.trim(),
      dueDate: `Due: ${dueDate}`,
      dateAdded: `Added: ${new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}`,
    };

    setHomeworkList((prev) => [newHomework, ...prev]);
    setSubject('');
    setHomeworkText('');
    setDueDate('');
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* ✅ Teacher Form */}
        {user?.role === 'teacher' && (
          <View className="mb-6 bg-yellow-100 p-4 rounded-2xl">
            <Text className="text-lg font-bold mb-2 pt-2 text-blue-900 text-center">Post New Homework</Text>

            <TextInput
              placeholder="Subject"
              value={subject}
              onChangeText={setSubject}
              className="border border-gray-300 rounded p-2 mb-2"
            />
            <TextInput
              placeholder="Homework Details"
              value={homeworkText}
              onChangeText={setHomeworkText}
              className="border border-gray-300 rounded p-2 mb-2"
              multiline
            />
            <TextInput
              placeholder="Due Date"
              value={dueDate}
              onChangeText={setDueDate}
              keyboardType='numeric'
              className="border border-gray-300 rounded p-2 mb-2"
            />

            <TouchableOpacity
              onPress={addHomework}
              className="bg-green-500 py-2 px-4 rounded"
            >
              <Text className="text-white text-center">Add Homework</Text>
            </TouchableOpacity>
          </View>
        )}
        {user?.role === 'parent' && (
          <ImageBackground
            source={{ uri: 'https://avk.edu.in/wp-content/uploads/2023/06/Abstract-Grand-Opening-Announcement-Free-Instagram-Post-1200-%C3%97-600-px.png' }}
            className="mb-6 rounded-2xl overflow-hidden"
            style={{height: 180}}
            imageStyle={{ borderRadius: 16 }} // to round corners of bg image
          >
            
          </ImageBackground>
        )}

        {/* ✅ Homework List */}
        {homeworkList.map((hw) => (
          <View
            key={hw.id}
            className="bg-blue-50 p-4 rounded-2xl mb-4 shadow-sm border border-black"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-blue-900">
                {hw.subject}
              </Text>
              <Text className="text-sm text-gray-500">{hw.dateAdded}</Text>
            </View>

            <Text className="text-base text-black mt-1">{hw.title}</Text>

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
