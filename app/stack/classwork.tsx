import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const classwork = () => {
  return (
    <View className="flex-1 bg-white p-4 ">
      <ScrollView className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:20}}
      >
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
      </ScrollView>
    </View>
  )
}

export default classwork