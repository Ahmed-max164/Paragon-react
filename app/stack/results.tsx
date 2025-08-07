import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const results = () => {
  return (
    <View className="flex-1 bg-white p-4">
      <ScrollView className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:20}}
      >

      </ScrollView>
    </View>
  )
}

export default results