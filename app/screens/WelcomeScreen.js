import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert} from 'react-native';

function WelcomeScreen(props) {
    const handlePress = () => console.log("text pressed!")

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.logo} source={require('../../assets/R2.png')}/>
        <Text onPress={handlePress}>Welcome to Rocket Elevators!</Text> 
        <Button title="Login" onPress={() => Alert.prompt("Login", "Please enter your email", text => console.log(text) )} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 250,
      height: 80,
      marginVertical: 10
    }
  });

export default WelcomeScreen;