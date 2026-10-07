import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";

export default function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreateAccount = () => {
    if (!name || !mobile || !password || !confirmPassword) {
      return;
    }

    if (mobile.length !== 10) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    router.push("/language");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.logo}>POONTHALIR</Text>

          <Text style={styles.title}>Create your account</Text>

          <Text style={styles.subtitle}>
            Join Poonthalir and start shopping for your everyday essentials.
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>Full Name</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
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

            <Text style={styles.label}>Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Create a password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Text style={styles.label}>Confirm Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              placeholderTextColor="#999"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <Pressable
              style={styles.createButton}
              onPress={handleCreateAccount}
            >
              <Text style={styles.createButtonText}>
                Create Account
              </Text>
            </Pressable>
          </View>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>

            <Pressable onPress={() => router.push("/login")}>
              <Text style={styles.loginLink}> Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF8",
  },

  scrollContent: {
    flexGrow: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 70,
    paddingBottom: 40,
  },

  logo: {
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 38,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 23,
    color: "#666666",
    marginBottom: 32,
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
    marginBottom: 18,
  },

  createButton: {
    height: 56,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111",
    marginTop: 8,
  },

  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
  },

  loginText: {
    color: "#666666",
    fontSize: 14,
  },

  loginLink: {
    color: "#111111",
    fontSize: 14,
    fontWeight: "700",
  },
});