import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const categories = [
  { id: "1", name: "Groceries", icon: "🛒" },
  { id: "2", name: "Cooking", icon: "🍳" },
  { id: "3", name: "Snacks", icon: "🍿" },
  { id: "4", name: "Beverages", icon: "🥤" },
  { id: "5", name: "Personal Care", icon: "🧴" },
  { id: "6", name: "Household", icon: "🏠" },
];

const products = [
  {
    id: "1",
    name: "Premium Basmati Rice",
    price: "₹499",
    mrp: "₹599",
    discount: "17% OFF",
  },
  {
    id: "2",
    name: "Sunflower Cooking Oil",
    price: "₹149",
    mrp: "₹175",
    discount: "15% OFF",
  },
  {
    id: "3",
    name: "Premium Tea",
    price: "₹220",
    mrp: "₹250",
    discount: "12% OFF",
  },
  {
    id: "4",
    name: "Dish Wash Liquid",
    price: "₹99",
    mrp: "₹120",
    discount: "18% OFF",
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>POONTHALIR</Text>
            <Text style={styles.location}>📍 Store Pickup</Text>
          </View>

          <Pressable style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </Pressable>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#888"
          />
        </View>

        {/* Pickup Banner */}
        <View style={styles.pickupBanner}>
          <View style={styles.pickupContent}>
            <Text style={styles.pickupLabel}>POONTHALIR PICKUP</Text>

            <Text style={styles.pickupTitle}>
              Order online.{"\n"}Pick up at store.
            </Text>

            <Text style={styles.pickupSubtitle}>
              No delivery charges. Pay at the store.
            </Text>
          </View>

          <Text style={styles.pickupIcon}>🛍️</Text>
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>

          <Pressable>
            <Text style={styles.viewAll}>View all</Text>
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map((category) => (
            <Pressable key={category.id} style={styles.categoryCard}>
              <View style={styles.categoryIcon}>
                <Text style={styles.categoryEmoji}>{category.icon}</Text>
              </View>

              <Text style={styles.categoryName}>{category.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Offers */}
        <View style={styles.offerBanner}>
          <View>
            <Text style={styles.offerSmall}>LIMITED TIME OFFER</Text>

            <Text style={styles.offerTitle}>
              Great deals.{"\n"}Better prices.
            </Text>

            <Text style={styles.offerSubtitle}>
              Save more on selected products.
            </Text>
          </View>

          <Text style={styles.offerPercent}>%</Text>
        </View>

        {/* Products */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Products</Text>

          <Pressable>
            <Text style={styles.viewAll}>View all</Text>
          </Pressable>
        </View>

        <View style={styles.productGrid}>
          {products.map((product) => (
            <Pressable key={product.id} style={styles.productCard}>
              <View style={styles.productImage}>
                <Text style={styles.imagePlaceholder}>IMAGE</Text>
              </View>

              <Text style={styles.productName} numberOfLines={2}>
                {product.name}
              </Text>

              <View style={styles.priceRow}>
                <Text style={styles.price}>{product.price}</Text>

                <Text style={styles.mrp}>{product.mrp}</Text>
              </View>

              <Text style={styles.discount}>{product.discount}</Text>

              <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
              </Pressable>
            </Pressable>
          ))}
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navActive}>Home</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>♡</Text>
          <Text style={styles.navText}>Wishlist</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navText}>Cart</Text>
        </Pressable>

        <Pressable style={styles.navItem}>
          <Text style={styles.navIcon}>☰</Text>
          <Text style={styles.navText}>Account</Text>
        </Pressable>
      </View>
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
    paddingTop: 55,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    fontSize: 23,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  location: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
  },

  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  profileIcon: {
    fontSize: 20,
  },

  searchContainer: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 18,
  },

  searchIcon: {
    fontSize: 28,
    color: "#555",
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111",
  },

  pickupBanner: {
    minHeight: 175,
    borderRadius: 20,
    backgroundColor: "#171717",
    padding: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },

  pickupContent: {
    flex: 1,
  },

  pickupLabel: {
    color: "#BBBBBB",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 8,
  },

  pickupTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    lineHeight: 31,
    fontWeight: "800",
  },

  pickupSubtitle: {
    color: "#BBBBBB",
    fontSize: 13,
    marginTop: 10,
  },

  pickupIcon: {
    fontSize: 54,
    marginLeft: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
  },

  viewAll: {
    fontSize: 13,
    fontWeight: "700",
  },

  categoryScroll: {
    gap: 12,
    paddingBottom: 28,
  },

  categoryCard: {
    width: 90,
    alignItems: "center",
  },

  categoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },

  categoryEmoji: {
    fontSize: 30,
  },

  categoryName: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },

  offerBanner: {
    minHeight: 155,
    borderRadius: 20,
    backgroundColor: "#EFE8D9",
    padding: 20,
    marginBottom: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  offerSmall: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 8,
  },

  offerTitle: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "800",
  },

  offerSubtitle: {
    fontSize: 12,
    color: "#666",
    marginTop: 8,
  },

  offerPercent: {
    fontSize: 70,
    fontWeight: "900",
    opacity: 0.15,
  },

  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  productCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  productImage: {
    height: 145,
    borderRadius: 12,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  imagePlaceholder: {
    fontSize: 11,
    color: "#999",
    fontWeight: "700",
  },

  productName: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "600",
    minHeight: 38,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
    gap: 7,
  },

  price: {
    fontSize: 17,
    fontWeight: "800",
  },

  mrp: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
  },

  discount: {
    fontSize: 11,
    color: "#267A3B",
    fontWeight: "700",
    marginTop: 3,
  },

  addButton: {
    height: 38,
    borderRadius: 10,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  bottomSpace: {
    height: 20,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 76,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  navIcon: {
    fontSize: 21,
    marginBottom: 4,
  },

  navActive: {
    fontSize: 11,
    fontWeight: "800",
  },

  navText: {
    fontSize: 11,
    color: "#777",
  },
});