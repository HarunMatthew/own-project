import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";

export default function Confirmation() {
  const bookingId = "PTL-20261007-001";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Success */}
        <View style={styles.successContainer}>
          <View style={styles.successCircle}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>

          <Text style={styles.successTitle}>
            Booking Confirmed!
          </Text>

          <Text style={styles.successSubtitle}>
            Your order has been successfully booked.
          </Text>
        </View>

        {/* Booking ID */}
        <View style={styles.bookingCard}>
          <Text style={styles.bookingLabel}>BOOKING ID</Text>

          <Text style={styles.bookingId}>{bookingId}</Text>

          <Text style={styles.bookingNote}>
            Keep this ID for pickup and order tracking.
          </Text>
        </View>

        {/* Pickup Details */}
        <Text style={styles.sectionTitle}>
          Pickup Details
        </Text>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📍</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>
                Pickup Location
              </Text>

              <Text style={styles.detailValue}>
                Poonthalir Store
              </Text>

              <Text style={styles.detailSub}>
                Store pickup only
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📅</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>
                Pickup Date
              </Text>

              <Text style={styles.detailValue}>
                Today, 07 October 2026
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🕐</Text>
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>
                Pickup Time
              </Text>

              <Text style={styles.detailValue}>
                10:00 AM - 12:00 PM
              </Text>
            </View>
          </View>
        </View>

        {/* Payment */}
        <Text style={styles.sectionTitle}>
          Payment
        </Text>

        <View style={styles.paymentCard}>
          <View style={styles.paymentIcon}>
            <Text style={styles.rupee}>₹</Text>
          </View>

          <View style={styles.paymentContent}>
            <Text style={styles.paymentTitle}>
              Pay at Store
            </Text>

            <Text style={styles.paymentSubtitle}>
              No online payment was made.
            </Text>
          </View>

          <View style={styles.pendingBadge}>
            <Text style={styles.pendingText}>
              PAY LATER
            </Text>
          </View>
        </View>

        {/* Order Summary */}
        <Text style={styles.sectionTitle}>
          Order Summary
        </Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Products
            </Text>

            <Text style={styles.summaryValue}>
              3 items
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Subtotal
            </Text>

            <Text style={styles.summaryValue}>
              ₹797
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Pickup Charges
            </Text>

            <Text style={styles.freeText}>
              FREE
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>
              Amount to Pay at Store
            </Text>

            <Text style={styles.totalValue}>
              ₹797
            </Text>
          </View>
        </View>

        {/* Instructions */}
        <View style={styles.instructionCard}>
          <Text style={styles.instructionTitle}>
            Before you visit
          </Text>

          <Text style={styles.instructionText}>
            • Bring your booking ID when collecting your order.
          </Text>

          <Text style={styles.instructionText}>
            • Your order will be prepared before your selected
            pickup slot.
          </Text>

          <Text style={styles.instructionText}>
            • Payment will be collected at the store.
          </Text>
        </View>

        {/* Actions */}
        <Pressable
          style={styles.ordersButton}
          onPress={() => router.replace("/orders")}
        >
          <Text style={styles.ordersButtonText}>
            View My Orders
          </Text>
        </Pressable>

        <Pressable
          style={styles.shoppingButton}
          onPress={() => router.replace("/home")}
        >
          <Text style={styles.shoppingButtonText}>
            Continue Shopping
          </Text>
        </Pressable>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF8",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 30,
  },

  successContainer: {
    alignItems: "center",
    marginBottom: 28,
  },

  successCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  checkIcon: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "700",
  },

  successTitle: {
    fontSize: 27,
    fontWeight: "800",
    marginBottom: 8,
  },

  successSubtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
  },

  bookingCard: {
    backgroundColor: "#111111",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
  },

  bookingLabel: {
    color: "#AAAAAA",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  bookingId: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 7,
    letterSpacing: 1,
  },

  bookingNote: {
    color: "#AAAAAA",
    fontSize: 11,
    marginTop: 8,
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginTop: 26,
    marginBottom: 12,
  },

  detailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 17,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 21,
  },

  detailContent: {
    flex: 1,
    marginLeft: 13,
  },

  detailLabel: {
    fontSize: 11,
    color: "#888888",
    marginBottom: 4,
  },

  detailValue: {
    fontSize: 14,
    fontWeight: "700",
  },

  detailSub: {
    fontSize: 11,
    color: "#888888",
    marginTop: 3,
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 15,
  },

  paymentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "center",
  },

  paymentIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },

  rupee: {
    fontSize: 22,
    fontWeight: "800",
  },

  paymentContent: {
    flex: 1,
    marginLeft: 12,
  },

  paymentTitle: {
    fontSize: 15,
    fontWeight: "800",
  },

  paymentSubtitle: {
    fontSize: 11,
    color: "#777777",
    marginTop: 4,
  },

  pendingBadge: {
    backgroundColor: "#F3E9D8",
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },

  pendingText: {
    fontSize: 9,
    fontWeight: "800",
  },

  summaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
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
    color: "#267A3B",
    fontSize: 13,
    fontWeight: "800",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: 15,
    fontWeight: "800",
    flex: 1,
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "800",
  },

  instructionCard: {
    backgroundColor: "#EFE8D9",
    borderRadius: 17,
    padding: 17,
    marginTop: 20,
  },

  instructionTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 10,
  },

  instructionText: {
    fontSize: 12,
    lineHeight: 19,
    color: "#666666",
    marginBottom: 5,
  },

  ordersButton: {
    height: 54,
    borderRadius: 13,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  ordersButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  shoppingButton: {
    height: 54,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  shoppingButtonText: {
    color: "#111111",
    fontSize: 15,
    fontWeight: "700",
  },

  bottomSpace: {
    height: 20,
  },
});