import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";

const foods = [
  
  { id: 2, name: "Pizza", image: require("../../assets/images/pizza.png") },
  { id: 3, name: "Sushi", image: require("../../assets/images/sushi.png") },
  { id: 4, name: "Pasta", image: require("../../assets/images/pasta.png") },
];

const Food = () => {
  const handleOrder = (foodName: string) => {
    Alert.alert("Order Placed", `You ordered ${foodName}!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Food Ordering</Text>

      {foods.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.foodImage} />
          <Text style={styles.foodName}>{item.name}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleOrder(item.name)}>
            <Text style={styles.buttonText}>Order</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  foodImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
