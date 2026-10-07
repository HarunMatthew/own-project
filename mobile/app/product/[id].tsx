import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

const productData = {
  name: "Premium Basmati Rice",
  brand: "Poonthalir Select",
  price: 499,
  mrp: 599,
  discount: "17% OFF",
  quantity: "5 kg",
  description:
    "Premium quality basmati rice with long grains and rich aroma. Perfect for biryani, pulao and everyday cooking.",
};

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);

  const product = productData;

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

          <Text style={styles.headerTitle}>Product Details</Text>

          <Pressable style={styles.wishlistButton}>
            <Text style={styles.heart}>♡</Text>
          </Pressable>
        </View>

        {/* Product Image */}
        <View style={styles.productImage}>
          <Text style={styles.imageText}>PRODUCT IMAGE</Text>
        </View>

        {/* Product Info */}
        <View style={styles.info}>
          <Text style={styles.brand}>{product.brand}</Text>

          <Text style={styles.productName}>{product.name}</Text>

          <Text style={styles.quantity}>{product.quantity}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹{product.price}</Text>

            <Text style={styles.mrp}>₹{product.mrp}</Text>

            <View style={styles.discountBox}>
              <Text style={styles.discount}>{product.discount}</Text>
            </View>
          </View>

          <Text style={styles.pickupTitle}>Store Pickup</Text>

          <View style={styles.pickupBox}>
            <Text style={styles.pickupIcon}>📍</Text>

            <View style={styles.pickupTextContainer}>
              <Text style={styles.pickupMain}>
                Available for pickup
              </Text>

              <Text style={styles.pickupSub}>
                Choose your pickup date and time at checkout.
              </Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>About this product</Text>

          <Text style={styles.description}>
            {product.description}
          </Text>

          {/* Quantity */}
          <Text style={styles.sectionTitle}>Quantity</Text>

          <View style={styles.quantitySelector}>
            <Pressable
              style={styles.quantityButton}
              onPress={() =>
                setQuantity((value) => Math.max(1, value - 1))
              }
            >
              <Text style={styles.quantityButtonText}>−</Text>
            </Pressable>

            <Text style={styles.quantityValue}>{quantity}</Text>

            <Pressable
              style={styles.quantityButton}
              onPress={() => setQuantity((value) => value + 1)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>

          <Text style={styles.totalPrice}>
            ₹{product.price * quantity}
          </Text>
        </View>

        <Pressable
          style={styles.addButton}
          onPress={() => router.push("/cart")}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
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
    paddingBottom: 120,
  },

  header: {
    height: 70,
    paddingHorizontal: 18,
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
    fontSize: 17,
    fontWeight: "700",
  },

  wishlistButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },

  heart: {
    fontSize: 25,
  },

  productImage: {
    height: 330,
    marginHorizontal: 18,
    borderRadius: 22,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },

  imageText: {
    fontSize: 13,
    color: "#999999",
    fontWeight: "700",
    letterSpacing: 1,
  },

  info: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  brand: {
    fontSize: 13,
    color: "#777777",
    fontWeight: "600",
    marginBottom: 6,
  },

  productName: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
  },

  quantity: {
    fontSize: 14,
    color: "#777777",
    marginTop: 7,
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  price: {
    fontSize: 27,
    fontWeight: "800",
  },

  mrp: {
    fontSize: 14,
    color: "#999999",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },

  discountBox: {
    backgroundColor: "#E5F5E8",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
    marginLeft: 10,
  },

  discount: {
    color: "#267A3B",
    fontSize: 11,
    fontWeight: "800",
  },

  pickupTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 28,
    marginBottom: 10,
  },

  pickupBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 14,
    padding: 15,
  },

  pickupIcon: {
    fontSize: 25,
    marginRight: 12,
  },

  pickupTextContainer: {
    flex: 1,
  },

  pickupMain: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },

  pickupSub: {
    fontSize: 12,
    color: "#777777",
    lineHeight: 18,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 28,
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 22,
  },

  quantitySelector: {
    height: 48,
    width: 135,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },

  quantityButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityButtonText: {
    fontSize: 22,
    fontWeight: "600",
  },

  quantityValue: {
    fontSize: 16,
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

  totalLabel: {
    fontSize: 12,
    color: "#777777",
  },

  totalPrice: {
    fontSize: 21,
    fontWeight: "800",
    marginTop: 3,
  },

  addButton: {
    height: 52,
    paddingHorizontal: 30,
    borderRadius: 13,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
