import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useUser } from '../../contexts/UserContext'; // ✅ your existing context

const initialClassworkList = [
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

const Classwork = () => {
  const { user } = useUser(); // ✅ get logged-in user role
  const [classworkList, setClassworkList] = useState(initialClassworkList);

  const [subject, setSubject] = useState('');
  const [classworkText, setClassworkText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addClasswork = () => {
    if (!subject.trim() || !classworkText.trim() || !dueDate.trim()) return;

    const newClasswork = {
      id: Date.now(),
      subject: subject.trim(),
      title: classworkText.trim(),
      dueDate: `Due: ${dueDate}`,
      dateAdded: `Added: ${new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}`,
    };

    setClassworkList((prev) => [newClasswork, ...prev]);
    setSubject('');
    setClassworkText('');
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
            <Text className="text-lg font-bold mb-2 pt-2 text-blue-900 text-center">Post New Classwork</Text>

            <TextInput
              placeholder="Subject"
              value={subject}
              onChangeText={setSubject}
              className="border border-gray-400 rounded p-2 mb-2"
            />
            <TextInput
              placeholder="Classwork Details"
              value={classworkText}
              onChangeText={setClassworkText}
              className="border border-gray-400 rounded p-2 mb-2"
              multiline
            />
            <TextInput
              placeholder="Due Date"
              value={dueDate}
              onChangeText={setDueDate}
              keyboardType='numeric'
              className="border border-gray-400 rounded p-2 mb-2"
            />

            <TouchableOpacity
              onPress={addClasswork}
              className="bg-green-500 py-2 px-4 rounded"
            >
              <Text className="text-white text-center">Add Classwork</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ✅ Homework List */}
        {classworkList.map((cw) => (
          <View
            key={cw.id}
            className="bg-blue-50 p-4 rounded-2xl mb-4 shadow-sm border border-black"
          >
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-semibold text-blue-900">
                {cw.subject}
              </Text>
              <Text className="text-sm text-gray-500">{cw.dateAdded}</Text>
            </View>

            <Text className="text-base text-black mt-1">{cw.title}</Text>

            <View className="flex-row justify-between mt-2">
              <Text className="text-sm text-gray-500">{cw.dueDate}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Classwork;
