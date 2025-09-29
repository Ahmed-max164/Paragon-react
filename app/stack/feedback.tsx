import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!feedback.trim()) {
      Alert.alert("⚠️ Empty Feedback", "Please write something before submitting.");
      return;
    }
    Alert.alert("✅ Thank you!", `Feedback: ${feedback}\nRating: ${rating} ⭐`);
    setFeedback("");
    setRating(0);
  };

  return (
    <View className="flex-1 bg-white px-5 py-10 ">
      {/* Title */}
      <Text className="text-3xl font-bold text-blue-900 text-center mb-2">
        We value your feedback!
      </Text>
      <Text className="text-base text-gray-600 text-center mb-6">
        Tell us what you think. Your opinion helps us improve!
      </Text>

      {/* Rating Section */}
      <View className="flex-row justify-center mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => setRating(star)}
            className="mx-1"
          >
            <MaterialIcons
              name={star <= rating ? "star" : "star-border"}
              size={36}
              color={star <= rating ? "#facc15" : "#9ca3af"}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback Input */}
      <TextInput
        className="border border-gray-300 rounded-xl p-4 text-base h-40 mb-6"
        placeholder="Write your feedback here..."
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-600 py-4 rounded-2xl items-center shadow-md active:scale-95 "
      >
        <Text className="text-white font-semibold text-lg">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;
