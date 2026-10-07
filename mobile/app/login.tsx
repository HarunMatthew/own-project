import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";

export default function Login() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.content}>
        <Text style={styles.logo}>POONTHALIR</Text>

        <Text style={styles.title}>Welcome back</Text>

        <Text style={styles.subtitle}>
          Sign in to continue shopping with Poonthalir.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Mobile Number</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            maxLength={10}
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry
          />

          <Pressable style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>

        <View style={styles.registerRow}>
          <Text style={styles.accountText}>
            Don't have an account?
          </Text>

          <Pressable onPress={() => router.push("/register")}>
            <Text style={styles.registerText}> Create Account</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF8",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
  },

  logo: {
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 42,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 23,
    color: "#666666",
    marginBottom: 35,
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },

  loginButton: {
    height: 54,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111",
    marginTop: 8,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },

  accountText: {
    color: "#666666",
    fontSize: 14,
  },

  registerText: {
    color: "#111111",
    fontSize: 14,
    fontWeight: "700",
  },
});