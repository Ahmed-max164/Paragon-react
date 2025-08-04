import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import AttendanceCircle from '../../components/AttendanceCircle';
import { Calendar } from 'react-native-calendars';

const AttendanceScreen = () => {
  return (
    <View className="flex-1 p-4 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Attendance Circle */}
        <View className="items-center my-4">
          <AttendanceCircle percentage={90} />
        </View>

        {/* Legend */}
        <View className="flex-row justify-around my-4">
          <View className="flex-row items-center space-x-2">
            <View className="w-4 h-4 bg-red-500 rounded-full" />
            <Text className="text-sm text-gray-700">Absent</Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <View className="w-4 h-4 bg-yellow-400 rounded-full" />
            <Text className="text-sm text-gray-700">Leave</Text>
          </View>
        </View>

        {/* Calendar */}
        <View className="rounded-xl bg-gray-100 p-2">
          <Calendar
            markedDates={{
              '2025-07-30': { marked: true, dotColor: 'red', selectedColor: '#fecaca' }, // Absent
              '2025-07-28': { marked: true, dotColor: 'yellow', selectedColor: '#fef08a' }, // Leave
            }}
            theme={{
              backgroundColor: '#f3f4f6',
              calendarBackground: '#f3f4f6',
              textSectionTitleColor: '#1f2937',
              selectedDayBackgroundColor: '#22c55e',
              selectedDayTextColor: '#fff',
              todayTextColor: '#2563eb',
              dayTextColor: '#111827',
              arrowColor: '#2563eb',
              textMonthFontWeight: 'bold',
              textMonthFontSize: 18,
              textDayFontSize: 16,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AttendanceScreen;
