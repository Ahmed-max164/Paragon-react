import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://randomuser.me/api/?results=10';

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();

        // Take 10 students (or however many you want)
        const selectedUsers = json.results.slice(0, 10);

        // Map users to students with roll numbers
        const mappedStudents = selectedUsers.map((user: { name: { first: any; last: any; }; picture: { medium: any; }; }, index: number) => ({
          id: index,
          name: `${user.name.first} ${user.name.last}`,
          rollNo: `RN-${100 + index}`, // Example roll number
          image: user.picture.medium,
        }));

        setStudents(mappedStudents);
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#1e3a8a" />
      </View>
    );
  }

  return (
    <View className="flex-1 p-4 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {students.map((student) => (
          <View
            key={student.id}
            className="flex-row items-center bg-yellow-100 p-4 mb-4 rounded-2xl shadow-sm"
          >
            <Image
              source={{ uri: student.image }}
              className="w-14 h-14 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-base font-semibold text-green-900">
                {student.name}
              </Text>
              <Text className="text-sm text-gray-800">
                Roll No: {student.rollNo}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Students;
