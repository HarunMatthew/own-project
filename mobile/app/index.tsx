import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>POONTHALIR</Text>

      <View>
        <Text style={styles.title}>
          Everything you need,{"\n"}ready for pickup.
        </Text>

        <Text style={styles.subtitle}>
          Shop your essentials and collect them easily
          from your Poonthalir store.
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingVertical: 70,
    backgroundColor: "#FFFDF8",
  },

  logo: {
    fontSize: 25,
    fontWeight: "800",
    letterSpacing: 2,
  },

  title: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: "800",
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666666",
  },

  button: {
    height: 56,
    borderRadius: 14,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});