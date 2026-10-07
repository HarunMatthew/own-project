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

const orders = [
  {
    id: "PTL-20261007-001",
    date: "07 October 2026",
    pickupDate: "07 October 2026",
    pickupTime: "10:00 AM - 12:00 PM",
    amount: 797,
    status: "READY FOR PICKUP",
    products: [
      {
        name: "Premium Basmati Rice",
        quantity: 1,
      },
      {
        name: "Sunflower Cooking Oil",
        quantity: 2,
      },
    ],
  },
];

const getStatusIndex = (status: string) => {
  const statuses = [
    "BOOKED",
    "CONFIRMED",
    "PREPARING",
    "READY FOR PICKUP",
    "PICKED UP",
  ];

  return statuses.indexOf(status);
};

export default function Orders() {
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
            onPress={() => router.replace("/home")}
          >
            <Text style={styles.backIcon}>‹</Text>
          </Pressable>

          <Text style={styles.headerTitle}>My Orders</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Page Intro */}
        <Text style={styles.pageTitle}>Your Orders</Text>

        <Text style={styles.pageSubtitle}>
          Track your bookings and pickup status.
        </Text>

        {/* Orders */}
        {orders.map((order) => {
          const currentStatus = getStatusIndex(order.status);

          return (
            <View key={order.id} style={styles.orderCard}>
              {/* Order Header */}
              <View style={styles.orderHeader}>
                <View>
                  <Text style={styles.orderLabel}>BOOKING ID</Text>

                  <Text style={styles.orderId}>{order.id}</Text>
                </View>

                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{order.status}</Text>
                </View>
              </View>

              <View style={styles.divider} />

              {/* Products */}
              <Text style={styles.sectionTitle}>Products</Text>

              {order.products.map((product, index) => (
                <View
                  key={`${product.name}-${index}`}
                  style={styles.productRow}
                >
                  <View style={styles.productImage}>
                    <Text style={styles.imageText}>IMAGE</Text>
                  </View>

                  <View style={styles.productInfo}>
                    <Text
                      style={styles.productName}
                      numberOfLines={2}
                    >
                      {product.name}
                    </Text>

                    <Text style={styles.productQuantity}>
                      Quantity: {product.quantity}
                    </Text>
                  </View>
                </View>
              ))}

              {/* Pickup */}
              <Text style={styles.sectionTitle}>Pickup Details</Text>

              <View style={styles.pickupCard}>
                <View style={styles.pickupRow}>
                  <Text style={styles.pickupIcon}>📍</Text>

                  <View>
                    <Text style={styles.pickupLabel}>Location</Text>

                    <Text style={styles.pickupValue}>
                      Poonthalir Store
                    </Text>
                  </View>
                </View>

                <View style={styles.pickupRow}>
                  <Text style={styles.pickupIcon}>📅</Text>

                  <View>
                    <Text style={styles.pickupLabel}>Date</Text>

                    <Text style={styles.pickupValue}>
                      {order.pickupDate}
                    </Text>
                  </View>
                </View>

                <View style={styles.pickupRow}>
                  <Text style={styles.pickupIcon}>🕐</Text>

                  <View>
                    <Text style={styles.pickupLabel}>Time</Text>

                    <Text style={styles.pickupValue}>
                      {order.pickupTime}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Status Timeline */}
              <Text style={styles.sectionTitle}>Order Status</Text>

              <View style={styles.timeline}>
                <StatusStep
                  title="Booking Placed"
                  active={currentStatus >= 0}
                  completed={currentStatus > 0}
                  isLast={false}
                />

                <StatusStep
                  title="Order Confirmed"
                  active={currentStatus >= 1}
                  completed={currentStatus > 1}
                  isLast={false}
                />

                <StatusStep
                  title="Preparing"
                  active={currentStatus >= 2}
                  completed={currentStatus > 2}
                  isLast={false}
                />

                <StatusStep
                  title="Ready for Pickup"
                  active={currentStatus >= 3}
                  completed={currentStatus > 3}
                  isLast={false}
                />

                <StatusStep
                  title="Picked Up"
                  active={currentStatus >= 4}
                  completed={false}
                  isLast={true}
                />
              </View>

              {/* Amount */}
              <View style={styles.amountCard}>
                <View>
                  <Text style={styles.amountLabel}>
                    Amount to Pay at Store
                  </Text>

                  <Text style={styles.paymentMethod}>
                    Payment: At Store
                  </Text>
                </View>

                <Text style={styles.amount}>
                  ₹{order.amount}
                </Text>
              </View>

              {/* Ready Banner */}
              {order.status === "READY FOR PICKUP" && (
                <View style={styles.readyBanner}>
                  <Text style={styles.readyIcon}>✓</Text>

                  <View style={styles.readyContent}>
                    <Text style={styles.readyTitle}>
                      Your order is ready!
                    </Text>

                    <Text style={styles.readyText}>
                      Visit the store during your selected pickup
                      slot and show your booking ID.
                    </Text>
                  </View>
                </View>
              )}
            </View>
          );
        })}

        {/* Continue Shopping */}
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

function StatusStep({
  title,
  active,
  completed,
  isLast,
}: {
  title: string;
  active: boolean;
  completed: boolean;
  isLast: boolean;
}) {
  return (
    <View style={styles.statusStep}>
      <View style={styles.statusIndicatorContainer}>
        <View
          style={[
            styles.statusIndicator,
            active && styles.activeIndicator,
          ]}
        >
          {completed && (
            <Text style={styles.completedCheck}>✓</Text>
          )}
        </View>

        {!isLast && (
          <View
            style={[
              styles.statusLine,
              active && styles.activeLine,
            ]}
          />
        )}
      </View>

      <Text
        style={[
          styles.statusStepText,
          active && styles.activeStepText,
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF8",
  },

  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 40,
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
    fontSize: 20,
    fontWeight: "800",
  },

  headerSpace: {
    width: 42,
  },

  pageTitle: {
    fontSize: 29,
    fontWeight: "800",
    marginTop: 8,
  },

  pageSubtitle: {
    fontSize: 14,
    color: "#777777",
    marginTop: 6,
    marginBottom: 22,
  },

  orderCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  orderLabel: {
    fontSize: 9,
    color: "#888888",
    fontWeight: "800",
    letterSpacing: 1,
  },

  orderId: {
    fontSize: 15,
    fontWeight: "800",
    marginTop: 5,
  },

  statusBadge: {
    backgroundColor: "#E5F5E8",
    borderRadius: 7,
    paddingHorizontal: 9,
    paddingVertical: 6,
    maxWidth: 125,
  },

  statusText: {
    color: "#267A3B",
    fontSize: 9,
    fontWeight: "800",
    textAlign: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 11,
  },

  productRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  productImage: {
    width: 62,
    height: 62,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },

  imageText: {
    fontSize: 8,
    color: "#999999",
    fontWeight: "700",
  },

  productInfo: {
    flex: 1,
    marginLeft: 12,
  },

  productName: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "700",
  },

  productQuantity: {
    fontSize: 12,
    color: "#777777",
    marginTop: 5,
  },

  pickupCard: {
    backgroundColor: "#FAFAFA",
    borderRadius: 13,
    padding: 13,
    marginBottom: 20,
  },

  pickupRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },

  pickupIcon: {
    fontSize: 19,
    width: 35,
  },

  pickupLabel: {
    fontSize: 10,
    color: "#888888",
    marginBottom: 2,
  },

  pickupValue: {
    fontSize: 13,
    fontWeight: "700",
  },

  timeline: {
    marginBottom: 18,
  },

  statusStep: {
    flexDirection: "row",
    minHeight: 47,
  },

  statusIndicatorContainer: {
    width: 25,
    alignItems: "center",
  },

  statusIndicator: {
    width: 19,
    height: 19,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D0D0D0",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  activeIndicator: {
    borderColor: "#111111",
    backgroundColor: "#111111",
  },

  completedCheck: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },

  statusLine: {
    width: 2,
    flex: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 2,
  },

  activeLine: {
    backgroundColor: "#111111",
  },

  statusStepText: {
    fontSize: 13,
    color: "#999999",
    marginLeft: 12,
    paddingTop: 1,
  },

  activeStepText: {
    color: "#111111",
    fontWeight: "700",
  },

  amountCard: {
    backgroundColor: "#F3F3F3",
    borderRadius: 13,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  amountLabel: {
    fontSize: 13,
    fontWeight: "700",
  },

  paymentMethod: {
    fontSize: 11,
    color: "#777777",
    marginTop: 4,
  },

  amount: {
    fontSize: 21,
    fontWeight: "800",
  },

  readyBanner: {
    backgroundColor: "#E5F5E8",
    borderRadius: 13,
    padding: 14,
    marginTop: 14,
    flexDirection: "row",
  },

  readyIcon: {
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: "#267A3B",
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 27,
    fontWeight: "800",
  },

  readyContent: {
    flex: 1,
    marginLeft: 10,
  },

  readyTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#267A3B",
  },

  readyText: {
    fontSize: 11,
    lineHeight: 17,
    color: "#4F7056",
    marginTop: 3,
  },

  shoppingButton: {
    height: 54,
    borderRadius: 13,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  shoppingButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  bottomSpace: {
    height: 20,
  },
});