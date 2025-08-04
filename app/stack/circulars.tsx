import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { MaterialIcons } from '@expo/vector-icons';

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

  const markAsRead = (id: string) => {
    setCirculars((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isRead: true } : item
      )
    );
  };

  return (
    <View className="flex-1 p-4 bg-white">
      

      <FlatList
        data={circulars}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View className="mb-4 bg-yellow-100 rounded-xl p-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-bold text-blue-500">
                {item.title}
              </Text>
              {!item.isRead && (
                <Text className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                  NEW
                </Text>
              )}
            </View>

            <Text className="text-sm text-grey-600 mt-1">{item.message}</Text>

            <View className="flex-row justify-between items-center mt-2">
              <Text className="text-xs text-gray-400">
                {format(new Date(item.date), 'MMMM d, yyyy')}
              </Text>
              {item.isRead && (
                <MaterialIcons name="check-circle" size={18} color="green" />
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CircularsScreen;
