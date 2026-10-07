import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";

const languages = [
  {
    id: "en",
    title: "English",
    subtitle: "Continue in English",
    icon: "A",
  },
  {
    id: "ta",
    title: "தமிழ்",
    subtitle: "தமிழில் தொடரவும்",
    icon: "அ",
  },
  {
    id: "hi",
    title: "हिंदी",
    subtitle: "हिंदी में जारी रखें",
    icon: "अ",
  },
];

export default function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleContinue = () => {
    router.replace("/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>POONTHALIR</Text>

        <View style={styles.header}>
          <Text style={styles.title}>Choose your language</Text>

          <Text style={styles.subtitle}>
            Select your preferred language for the Poonthalir app.
          </Text>
        </View>

        <View style={styles.languageContainer}>
          {languages.map((language) => {
            const isSelected = selectedLanguage === language.id;

            return (
              <Pressable
                key={language.id}
                style={[
                  styles.languageCard,
                  isSelected && styles.selectedCard,
                ]}
                onPress={() => setSelectedLanguage(language.id)}
              >
                <View
                  style={[
                    styles.iconContainer,
                    isSelected && styles.selectedIcon,
                  ]}
                >
                  <Text
                    style={[
                      styles.iconText,
                      isSelected && styles.selectedIconText,
                    ]}
                  >
                    {language.icon}
                  </Text>
                </View>

                <View style={styles.languageTextContainer}>
                  <Text style={styles.languageTitle}>
                    {language.title}
                  </Text>

                  <Text style={styles.languageSubtitle}>
                    {language.subtitle}
                  </Text>
                </View>

                <View
                  style={[
                    styles.radioOuter,
                    isSelected && styles.radioSelected,
                  ]}
                >
                  {isSelected && <View style={styles.radioInner} />}
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.infoText}>
            You can change your language later from Settings.
          </Text>

          <Pressable
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF8",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },

  logo: {
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 55,
  },

  header: {
    marginBottom: 32,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 40,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666666",
  },

  languageContainer: {
    gap: 14,
  },

  languageCard: {
    height: 82,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  selectedCard: {
    borderColor: "#111111",
    borderWidth: 2,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedIcon: {
    backgroundColor: "#111111",
  },

  iconText: {
    fontSize: 21,
    fontWeight: "700",
    color: "#333333",
  },

  selectedIconText: {
    color: "#FFFFFF",
  },

  languageTextContainer: {
    flex: 1,
    marginLeft: 14,
  },

  languageTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 4,
  },

  languageSubtitle: {
    fontSize: 13,
    color: "#777777",
  },

  radioOuter: {
    width: 22,
    height: 22,
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
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#111111",
  },

  bottomContainer: {
    marginTop: "auto",
  },

  infoText: {
    textAlign: "center",
    fontSize: 13,
    color: "#888888",
    marginBottom: 16,
  },

  continueButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: "#111111",
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});