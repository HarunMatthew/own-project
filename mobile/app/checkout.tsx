import React, { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";

const dates = [
  {
    id: "1",
    day: "Today",
    date: "07",
  },
  {
    id: "2",
    day: "Tomorrow",
    date: "08",
  },
  {
    id: "3",
    day: "Thu",
    date: "09",
  },
  {
    id: "4",
    day: "Fri",
    date: "10",
  },
];

const timeSlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM",
];

export default function Checkout() {
  const [selectedDate, setSelectedDate] = useState("1");
  const [selectedSlot, setSelectedSlot] = useState(
    "10:00 AM - 12:00 PM"
  );

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleBooking = () => {
    if (!name.trim() || mobile.length !== 10) {
      Alert.alert(
        "Complete your details",
        "Please enter your name and valid 10-digit mobile number."
      );
      return;
    }

    router.replace("/confirmation");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </Pressable>

          <Text style={styles.headerTitle}>Pickup & Checkout</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Pickup Information */}
        <View style={styles.infoBanner}>
          <Text style={styles.infoIcon}>📍</Text>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Store Pickup
            </Text>

            <Text style={styles.infoText}>
              Your order will be prepared and kept ready at the
              Poonthalir store.
            </Text>
          </View>
        </View>

        {/* Customer Details */}
        <Text style={styles.sectionTitle}>Customer Details</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Full Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Mobile Number</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your 10-digit mobile number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        {/* Pickup Date */}
        <Text style={styles.sectionTitle}>
          Select Pickup Date
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.dateContainer}
        >
          {dates.map((item) => {
            const selected = selectedDate === item.id;

            return (
              <Pressable
                key={item.id}
                style={[
                  styles.dateCard,
                  selected && styles.selectedDateCard,
                ]}
                onPress={() => setSelectedDate(item.id)}
              >
                <Text
                  style={[
                    styles.dateDay,
                    selected && styles.selectedDateText,
                  ]}
                >
                  {item.day}
                </Text>

                <Text
                  style={[
                    styles.dateNumber,
                    selected && styles.selectedDateText,
                  ]}
                >
                  {item.date}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Pickup Time */}
        <Text style={styles.sectionTitle}>
          Select Pickup Time
        </Text>

        <View style={styles.slotContainer}>
          {timeSlots.map((slot) => {
            const selected = selectedSlot === slot;

            return (
              <Pressable
                key={slot}
                style={[
                  styles.slot,
                  selected && styles.selectedSlot,
                ]}
                onPress={() => setSelectedSlot(slot)}
              >
                <Text
                  style={[
                    styles.slotText,
                    selected && styles.selectedSlotText,
                  ]}
                >
                  {slot}
                </Text>

                <View
                  style={[
                    styles.radio,
                    selected && styles.radioSelected,
                  ]}
                >
                  {selected && <View style={styles.radioInner} />}
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Payment */}
        <Text style={styles.sectionTitle}>Payment</Text>

        <View style={styles.paymentCard}>
          <View style={styles.paymentIconContainer}>
            <Text style={styles.paymentIcon}>₹</Text>
          </View>

          <View style={styles.paymentContent}>
            <Text style={styles.paymentTitle}>
              Pay at Store
            </Text>

            <Text style={styles.paymentText}>
              No online payment required. Pay by cash or
              available payment methods when you collect your
              order.
            </Text>
          </View>

          <View style={styles.checkCircle}>
            <Text style={styles.check}>✓</Text>
          </View>
        </View>

        {/* Order Summary */}
        <Text style={styles.sectionTitle}>Order Summary</Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Items</Text>
            <Text style={styles.summaryValue}>3</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>₹797</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Pickup Charges
            </Text>

            <Text style={styles.freeText}>FREE</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₹797</Text>
          </View>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Confirm Booking */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomLabel}>Pay at Store</Text>
          <Text style={styles.bottomPrice}>₹797</Text>
        </View>

        <Pressable
          style={styles.confirmButton}
          onPress={handleBooking}
        >
          <Text style={styles.confirmText}>
            Confirm Booking
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF8",
  },

  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 120,
  },

  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },

  backIcon: {
    fontSize: 32,
    lineHeight: 34,
  },

  headerTitle: {
    fontSize: 19,
    fontWeight: "800",
  },

  headerSpace: {
    width: 42,
  },

  infoBanner: {
    backgroundColor: "#EFE8D9",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  infoIcon: {
    fontSize: 27,
    marginRight: 12,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },

  infoText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#666666",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginTop: 25,
    marginBottom: 12,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  label: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 7,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
  },

  dateContainer: {
    gap: 10,
  },

  dateCard: {
    width: 78,
    height: 82,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedDateCard: {
    backgroundColor: "#111111",
    borderColor: "#111111",
  },

  dateDay: {
    fontSize: 12,
    color: "#777777",
    fontWeight: "600",
  },

  dateNumber: {
    fontSize: 25,
    fontWeight: "800",
    marginTop: 3,
  },

  selectedDateText: {
    color: "#FFFFFF",
  },

  slotContainer: {
    gap: 10,
  },

  slot: {
    height: 55,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  selectedSlot: {
    borderColor: "#111111",
    borderWidth: 2,
  },

  slotText: {
    fontSize: 14,
    fontWeight: "600",
  },

  selectedSlotText: {
    fontWeight: "800",
  },

  radio: {
    width: 21,
    height: 21,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#BBBBBB",
    justifyContent: "center",
    alignItems: "center",
  },

  radioSelected: {
    borderColor: "#111111",
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#111111",
  },

  paymentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
  },

  paymentIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },

  paymentIcon: {
    fontSize: 22,
    fontWeight: "800",
  },

  paymentContent: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  paymentTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },

  paymentText: {
    fontSize: 11,
    lineHeight: 17,
    color: "#777777",
  },

  checkCircle: {
    width: 23,
    height: 23,
    borderRadius: 12,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },

  check: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  summaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 17,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  summaryLabel: {
    fontSize: 14,
    color: "#666666",
  },

  summaryValue: {
    fontSize: 14,
    fontWeight: "600",
  },

  freeText: {
    fontSize: 13,
    color: "#267A3B",
    fontWeight: "800",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 3,
  },

  totalLabel: {
    fontSize: 17,
    fontWeight: "800",
  },

  totalValue: {
    fontSize: 19,
    fontWeight: "800",
  },

  bottomSpace: {
    height: 20,
  },

  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 82,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  bottomLabel: {
    fontSize: 12,
    color: "#777777",
  },

  bottomPrice: {
    fontSize: 21,
    fontWeight: "800",
    marginTop: 3,
  },

  confirmButton: {
    height: 52,
    paddingHorizontal: 22,
    borderRadius: 13,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },

  confirmText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});