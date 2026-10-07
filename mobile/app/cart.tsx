import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";

const initialCart = [
  {
    id: "1",
    name: "Premium Basmati Rice",
    quantity: "5 kg",
    price: 499,
    mrp: 599,
    count: 1,
  },
  {
    id: "2",
    name: "Sunflower Cooking Oil",
    quantity: "1 L",
    price: 149,
    mrp: 175,
    count: 2,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const increaseQuantity = (id: string) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const mrpTotal = cartItems.reduce(
    (total, item) => total + item.mrp * item.count,
    0
  );

  const savings = mrpTotal - subtotal;

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

          <Text style={styles.headerTitle}>My Cart</Text>

          <View style={styles.headerSpace} />
        </View>

        {/* Cart Count */}
        <Text style={styles.cartCount}>
          {cartItems.length} items in your cart
        </Text>

        {/* Pickup Information */}
        <View style={styles.pickupBanner}>
          <Text style={styles.pickupIcon}>📍</Text>

          <View style={styles.pickupContent}>
            <Text style={styles.pickupTitle}>
              Store Pickup Only
            </Text>

            <Text style={styles.pickupText}>
              Choose your pickup date and time at checkout.
            </Text>
          </View>
        </View>

        {/* Products */}
        {cartItems.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <View style={styles.productImage}>
              <Text style={styles.imageText}>IMAGE</Text>
            </View>

            <View style={styles.productInfo}>
              <Text style={styles.productName} numberOfLines={2}>
                {item.name}
              </Text>

              <Text style={styles.productQuantity}>
                {item.quantity}
              </Text>

              <View style={styles.priceRow}>
                <Text style={styles.price}>₹{item.price}</Text>

                <Text style={styles.mrp}>₹{item.mrp}</Text>
              </View>

              <View style={styles.quantityRow}>
                <Pressable
                  style={styles.quantityButton}
                  onPress={() => decreaseQuantity(item.id)}
                >
                  <Text style={styles.quantityButtonText}>−</Text>
                </Pressable>

                <Text style={styles.quantityValue}>
                  {item.count}
                </Text>

                <Pressable
                  style={styles.quantityButton}
                  onPress={() => increaseQuantity(item.id)}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        ))}

        {cartItems.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🛒</Text>

            <Text style={styles.emptyTitle}>
              Your cart is empty
            </Text>

            <Text style={styles.emptyText}>
              Add some products to continue shopping.
            </Text>

            <Pressable
              style={styles.shopButton}
              onPress={() => router.replace("/home")}
            >
              <Text style={styles.shopButtonText}>
                Continue Shopping
              </Text>
            </Pressable>
          </View>
        )}

        {cartItems.length > 0 && (
          <>
            {/* Price Details */}
            <Text style={styles.sectionTitle}>Price Details</Text>

            <View style={styles.priceDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>MRP Total</Text>

                <Text style={styles.detailValue}>
                  ₹{mrpTotal}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Poonthalir Price</Text>

                <Text style={styles.detailValue}>
                  ₹{subtotal}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.savingsLabel}>Your Savings</Text>

                <Text style={styles.savingsValue}>
                  ₹{savings}
                </Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.detailRow}>
                <Text style={styles.totalLabel}>Total</Text>

                <Text style={styles.totalValue}>
                  ₹{subtotal}
                </Text>
              </View>
            </View>

            {/* Payment Information */}
            <View style={styles.paymentBox}>
              <Text style={styles.paymentTitle}>
                💳 Payment at Store
              </Text>

              <Text style={styles.paymentText}>
                No online payment required. Pay when you collect
                your order from the Poonthalir store.
              </Text>
            </View>
          </>
        )}
      </ScrollView>

      {/* Bottom Checkout */}
      {cartItems.length > 0 && (
        <View style={styles.bottomBar}>
          <View>
            <Text style={styles.bottomLabel}>Total Amount</Text>

            <Text style={styles.bottomPrice}>
              ₹{subtotal}
            </Text>
          </View>

          <Pressable
            style={styles.checkoutButton}
            onPress={() => router.push("/checkout")}
          >
            <Text style={styles.checkoutText}>
              Continue
            </Text>
          </Pressable>
        </View>
      )}
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
    fontSize: 20,
    fontWeight: "800",
  },

  headerSpace: {
    width: 42,
  },

  cartCount: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },

  pickupBanner: {
    backgroundColor: "#EFE8D9",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  pickupIcon: {
    fontSize: 25,
    marginRight: 12,
  },

  pickupContent: {
    flex: 1,
  },

  pickupTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },

  pickupText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#666666",
  },

  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    marginBottom: 12,
  },

  productImage: {
    width: 105,
    height: 120,
    borderRadius: 12,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },

  imageText: {
    fontSize: 10,
    color: "#999999",
    fontWeight: "700",
  },

  productInfo: {
    flex: 1,
    marginLeft: 14,
  },

  productName: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
  },

  productQuantity: {
    fontSize: 12,
    color: "#777777",
    marginTop: 5,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  price: {
    fontSize: 17,
    fontWeight: "800",
  },

  mrp: {
    fontSize: 12,
    color: "#999999",
    textDecorationLine: "line-through",
    marginLeft: 7,
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityButtonText: {
    fontSize: 19,
    fontWeight: "600",
  },

  quantityValue: {
    width: 35,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginTop: 24,
    marginBottom: 12,
  },

  priceDetails: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 17,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  detailLabel: {
    fontSize: 14,
    color: "#666666",
  },

  detailValue: {
    fontSize: 14,
    fontWeight: "600",
  },

  savingsLabel: {
    fontSize: 14,
    color: "#267A3B",
  },

  savingsValue: {
    fontSize: 14,
    color: "#267A3B",
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 4,
  },

  totalLabel: {
    fontSize: 17,
    fontWeight: "800",
  },

  totalValue: {
    fontSize: 19,
    fontWeight: "800",
  },

  paymentBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  paymentTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 7,
  },

  paymentText: {
    fontSize: 12,
    lineHeight: 19,
    color: "#666666",
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 21,
    fontWeight: "800",
  },

  emptyText: {
    fontSize: 14,
    color: "#777777",
    marginTop: 7,
    textAlign: "center",
  },

  shopButton: {
    backgroundColor: "#111111",
    borderRadius: 12,
    paddingHorizontal: 22,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  shopButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
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

  checkoutButton: {
    height: 52,
    minWidth: 145,
    paddingHorizontal: 25,
    borderRadius: 13,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },

  checkoutText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});