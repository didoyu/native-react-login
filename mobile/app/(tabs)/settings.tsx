import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react' 
import { useRouter } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const Profile = () => {
  const router = useRouter();

  // State for user profile info
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [location, setLocation] = useState("Cagayan de Oro, PH");

  // Toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    router.replace("/login");
  };

  const handleSave = () => {
    setIsEditing(false); // Exit edit mode after saving
    // Optional: Save changes to your backend / Supabase here
  };

  return (
    <View style={styles.container}> 
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.appTitle}>QuickBite</Text>
        <Text style={styles.pageTitle}>Your Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.avatarContainer}>
        <Image 
        source={require("../../assets/images/asa.png")} 
        style={styles.avatar} 
      />

      </View>

      {/* Editable Profile Info */}
      <View style={styles.infoContainer}>
        {/* Name */}
        <View style={styles.infoRow}>
          <FontAwesome name="user" size={20} color="#DA7807" />
          {isEditing ? (
            <TextInput 
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          ) : (
            <Text style={styles.infoText}>{name}</Text>
          )}
        </View>

        {/* Email */}
        <View style={styles.infoRow}>
          <FontAwesome name="envelope" size={20} color="#DA7807" />
          {isEditing ? (
            <TextInput 
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.infoText}>{email}</Text>
          )}
        </View>

        {/* Location */}
        <View style={styles.infoRow}>
          <FontAwesome name="map-marker" size={20} color="#DA7807" />
          {isEditing ? (
            <TextInput 
              style={styles.input}
              value={location}
              onChangeText={setLocation}
            />
          ) : (
            <Text style={styles.infoText}>{location}</Text>
          )}
        </View>
      </View>

      {/* Buttons */}
      {isEditing ? (
        <TouchableOpacity onPress={handleSave} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Save Changes</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => router.push("/(tabs)/home")} style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={[styles.actionButton, styles.logoutButton]}>
        <Text style={styles.actionButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  appTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#DA7807",
  },
  pageTitle: {
    fontSize: 18,
    marginTop: 5,
    color: "#333",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#DA7807",
  },
  infoContainer: {
    marginTop: 40,
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#DA7807",
    paddingVertical: 2,
  },
  actionButton: {
    backgroundColor: "#DA7807",
    marginHorizontal: 40,
    marginTop: 20,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    elevation: 3,
  },
  logoutButton: {
    backgroundColor: "red",
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
