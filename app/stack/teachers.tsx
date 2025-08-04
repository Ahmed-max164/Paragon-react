import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';

const SUBJECTS = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'History',
  'Geography',
  'Computer Science',
];

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://randomuser.me/api/?results=10';

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();

        // Shuffle the subjects
        const shuffledSubjects = [...SUBJECTS].sort(() => 0.5 - Math.random());

        // Take only as many users as subjects
        const selectedUsers = json.results.slice(0, SUBJECTS.length);

        // Map users to teachers with unique subjects
        const mappedTeachers = selectedUsers.map((user, index) => ({
          id: index,
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          subject: shuffledSubjects[index],
          image: user.picture.medium,
        }));

        setTeachers(mappedTeachers);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
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
        {teachers.map((teacher) => (
          <View
            key={teacher.id}
            className="flex-row items-center bg-blue-100 p-4 mb-4 rounded-2xl shadow-sm"
          >
            <Image
              source={{ uri: teacher.image }}
              className="w-14 h-14 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-base font-semibold text-blue-900">
                {teacher.name}
              </Text>
              <Text className="text-sm text-grey-900">{teacher.subject}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Teachers;
