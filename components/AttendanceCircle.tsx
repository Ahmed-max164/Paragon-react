import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const AttendanceCircle = ({ percentage }: { percentage: number }) => {
  return (
    <View className="items-center justify-center w-40 h-40">
      <AnimatedCircularProgress
        size={160}
        width={15}
        fill={percentage}
        tintColor="#2563eb"
        backgroundColor="#e5e7eb"
        rotation={0}
        lineCap="round"
      >
        {
          () => (
            <View style={styles.centerText}>
              <Text className="text-3xl font-bold text-blue-900">{percentage}%</Text>
              <Text className="text-2xl text-gray-500">Attendance</Text>
            </View>
          )
        }
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AttendanceCircle;
