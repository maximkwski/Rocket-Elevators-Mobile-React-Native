import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, Alert, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



function WelcomeScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();



    const handleLogin = async () => {
        let currentEmail = email;
        try {
            const resp = await axios.get(`https://salty-woodland-19674.herokuapp.com/api/users/email/${currentEmail}`);
            if (resp.status == 200)  {
            console.log("user data is :", resp.data);
            console.log("current user email is :", resp.data.email);
            navigation.replace("Home");
            } else {
                Alert.alert("Incorrect email","Please enter vaild email address")
            }
            
    
        } catch (error) {

            console.warn("Error:", error)
        }
    }

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <Image style={styles.logo} source={require('../../assets/R2.png')}/>
        <View style={styles.inputContainer}>
            <TextInput 
                autoCapitalize="none"
                autoCorrect="false"
                placeholder='Email'
                value={email}
                onChangeText = {text => setEmail(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder='Password'
                value={password}
                onChangeText = {text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        marginTop: 40,
    },
    button: {
        width: '100%',
        backgroundColor: "#0782F9",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    logo: {
      width: 250,
      height: 80,
      marginVertical: 10
    }
  });

export default WelcomeScreen;