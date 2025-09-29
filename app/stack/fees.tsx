import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const Fees = () => {
  const navigation = useNavigation();
  const [feeDetails, setFeeDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // 👉 Fetch Fee Details from API
  useEffect(() => {
    const fetchFeeDetails = async (studentId: number) => {
  try {
    const response = await fetch(
      `https://66d1b3ab62816af9a4f47989.mockapi.io/api/v1/fees/${studentId}`
    );
    const data = await response.json();
    setFeeDetails(data);
  } catch (error) {
    Alert.alert("❌ Error", "Failed to fetch fee details");
  } finally {
    setLoading(false);
  }
};

// Example: fetch details for student with ID=5
fetchFeeDetails(5);

  }, []);

  // 👉 View Challan
  

  const handlePayNow = () => {
    Alert.alert("💳 Payment Gateway", "Redirecting to payment screen...");
  };

  // 👉 Show loader while fetching
  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#2563eb" />
        <Text className="mt-2 text-blue-800">Loading Fee Details...</Text>
      </View>
    );
  }

  if (!feeDetails) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-600">No Fee Details Found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white p-5">
      {/* Title */}
      <Text className="text-2xl font-bold text-blue-900 text-center mb-5">
        For Your Ease!!
      </Text>

      {/* Fee Challan Card */}
      <View className="bg-blue-50 rounded-2xl p-5 mb-6 border border-gray-300 shadow">
        <Text className="text-lg font-bold text-blue-800 mb-2">Fee Challan</Text>
        <Text className="text-base text-gray-700">
          Student: {feeDetails.studentName}
        </Text>
        <Text className="text-base text-gray-700">
          Class: {feeDetails.class} | Roll No: {feeDetails.rollNo}
        </Text>
        <Text className="text-base text-gray-700">
          Challan No: {feeDetails.challanNo}
        </Text>
        <Text className="text-base text-gray-700">
          Due Date: {feeDetails.dueDate}
        </Text>
        <Text className="text-lg font-semibold text-red-600 mt-2">
          Amount: ₹{feeDetails.totalAmount}
        </Text>
        <Text
          className={`text-sm mt-1 font-medium ${
            feeDetails.status === "Paid" ? "text-green-600" : "text-red-600"
          }`}
        >
          Status: {feeDetails.status}
        </Text>

        <View className="flex-row mt-4 ">
          {/* View Challan */}
          <TouchableOpacity
            onPress={handleViewChallan}
            className="flex-1 flex-row items-center justify-center bg-yellow-400 py-3 rounded-xl active:scale-95 mr-2"
          >
            <MaterialIcons name="visibility" size={22} color="black" />
            <Text className="ml-2 text-black font-semibold">View</Text>
          </TouchableOpacity>

          {/* Download Challan */}
          <TouchableOpacity
            onPress={handleDownloadChallan}
            className="flex-1 flex-row items-center justify-center bg-yellow-400 py-3 rounded-xl active:scale-95 ml-2"
          >
            <MaterialIcons name="file-download" size={22} color="black" />
            <Text className="ml-2 text-black font-semibold">Download</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity
        onPress={handlePayNow}
        className="bg-green-600 py-4 rounded-2xl items-center shadow-md active:scale-95"
      >
        <Text className="text-white font-semibold text-lg">Pay Fees Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Fees;
