import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity} from 'react-native';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

   const handleSignOut = () => { 
        navigation.replace('Welcome')
   }


  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>

        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '60%',
        backgroundColor: "#0782F9",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
        
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})
