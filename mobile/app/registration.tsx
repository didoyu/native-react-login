import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react' 
import { Link } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const registration = () => {
  return (
    
    <View style ={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/images/shape.png")}/>
      </View>
       <View style={styles.logo}>
        <Image source={require("../assets/images/Vector.png")}/>
       </View>
      <View style ={styles.textContainer}>
        <Text style ={styles.text}>QuickBite</Text>
        <Text style ={styles.text1}>Make an account</Text>

      </View>
      {/*<View style ={styles.buttonContainer}>
        <Link href="/login" asChild>
          <Image source={require("../assets/images/Button.png")} style ={styles.button}/>
        </Link>
      </View>*/}
      <View style = {styles.inputContainer}>
        <FontAwesome
        name = "user"
        size = {20}
        color = "#DA7807"
        style = {styles.emailAddressIcon}
        />
        <TextInput style =
        {styles.emailAddress}
        placeholder="Enter Email Address"
        keyboardType='email-address'
        />
      </View>
      <View style = {styles.passwordContainer}>
        <FontAwesome
        name = "lock"
        size = {20}
        color = "#DA7807"
        style = {styles.passwordIcon}
        />
        <TextInput style =
        {styles.password}
        placeholder="Enter Password"
        secureTextEntry={true}
        />
      </View>

      
      <TouchableOpacity style =
        {styles.loginButton}>
        <Text style =
        {styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style = {styles.signupContainer}>
        <Text style = {styles.signupText}>Don't have an account? </Text>
        <Link href = "/">
          <Text style = {styles.signupColor}>Login</Text>
        </Link>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  topImageContainer: {
    //blank
  },
  logo: {
    marginTop: 60,
    alignItems: "center"
  },
  textContainer: {
    
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  }, 
  text1: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  }, 
  buttonContainer: {
    marginTop: 150,
    
  },
  button:{
   marginBottom: 10000
   
  },
  inputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 5,
    marginVertical: 40,
    paddingHorizontal: 10
  },
  emailAddressIcon: {
    marginLeft: 5
  },
  emailAddress:{
    flex: 1,
    paddingVertical: 12,
    marginLeft: 10,
    height: 50
  },
  password:{
    flex: 1,
    paddingVertical: 12,
    marginLeft: 10,
    height: 50

  },
  passwordContainer:{
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 40,
    elevation: 5,
    paddingHorizontal: 10,
    
  },
  passwordIcon:{
    marginLeft: 5
  },
  loginButton:{
    backgroundColor: "#DA7807",
    
    marginHorizontal: 40,
    marginTop: 30,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    elevation: 5

  }, 
  loginButtonText:{ 
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  signupContainer:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  signupText: {},
  signupColor:{
    fontSize: 14,
    fontWeight: "bold",
    color: "blue"
  }


})
export default registration