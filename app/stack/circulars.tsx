import { MaterialIcons } from '@expo/vector-icons';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useUser } from '../../contexts/UserContext';

const initialCirculars = [
  {
    id: '1',
    title: 'Independence Day Celebration',
    message: 'Flag hoisting will take place at 9:00 AM in the school ground.',
    date: '2025-08-01',
    isRead: false,
  },
  {
    id: '2',
    title: 'PTA Meeting Schedule',
    message: 'The PTA meeting will be held on Monday in the main hall.',
    date: '2025-07-30',
    isRead: true,
  },
  {
    id: '3',
    title: 'Holiday Notice',
    message: 'School will remain closed on account of Raksha Bandhan.',
    date: '2025-07-28',
    isRead: false,
  },
];

const CircularsScreen = () => {
  const [circulars, setCirculars] = useState(initialCirculars);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

    const { user } = useUser(); // ✅ get current logged in user role
  const addNotice = () => {
    if (!title.trim() || !message.trim()) return;

    const newNotice = {
      id: Date.now().toString(),
      title: title.trim(),
      message: message.trim(),
      date: new Date().toISOString(), // today's date automatically
      isRead: false,
    };

    setCirculars((prev) => [newNotice, ...prev]); // add to top of list
    setTitle('');
    setMessage('');
  };

  const markAsRead = (id: string) => {
    setCirculars((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
  };

  return (
    <View className="flex-1 p-4 bg-white">
         {/* Add Notice Form */}
      {user?.role === 'teacher'&& (
      <View className="mb-6 bg-yellow-100 p-4 rounded-2xl">
        <Text className="text-lg font-bold mb-2 text-center text-blue-900">Post New Notice</Text>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          className="border border-gray-400 rounded p-2 mb-2"
        />
        <TextInput
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          className="border border-gray-400 rounded p-2 mb-2"
          multiline
        />
        <TouchableOpacity
          onPress={addNotice}
          className="bg-green-500 py-2 px-4 rounded pb-2"
        >
          <Text className="text-white text-center">Post Notice</Text>
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

      {/* List of Notices */}
      <FlatList
        data={circulars}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => markAsRead(item.id)}>
            <View className="mb-4 bg-blue-50 rounded-2xl p-4 border border-black">
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-bold text-blue-900">
                  {item.title}
                </Text>
                {!item.isRead && (
                  <Text className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                    NEW
                  </Text>
                )}
              </View>

              <Text className="text-sm text-gray-600 mt-1">{item.message}</Text>

              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-xs text-gray-400">
                  {format(new Date(item.date), 'MMMM d, yyyy')}
                </Text>
                {item.isRead && (
                  <MaterialIcons name="check-circle" size={18} color="green" />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CircularsScreen;
