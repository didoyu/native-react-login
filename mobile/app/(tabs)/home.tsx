import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.appTitle}>QuickBite</Text>
        <Text style={styles.subTitle}>Welcome 👋</Text>
      </View>

      {/* Main Feature Buttons */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => router.push("/(tabs)/food")}
        >
          <FontAwesome name="cutlery" size={28} color="#DA7807" />
          <Text style={styles.featureText}>Food</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => router.push("/(tabs)/settings")}
        >
          <FontAwesome name="cog" size={28} color="#DA7807" />
          <Text style={styles.featureText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DA7807",
  },
  subTitle: {
    fontSize: 16,
    marginTop: 5,
    color: "#555",
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  featureCard: {
    width: "40%",
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  featureText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
  },
});

export default Home;
