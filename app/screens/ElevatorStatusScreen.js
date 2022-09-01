import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ElevatorStatusScreen = () => {
  const navigation = useNavigation();

  
  return (
   <View style={styles.container}>
       <Text>Elevator Status</Text>
   <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home')}}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
   </View>

  )
}

export default ElevatorStatusScreen

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
    marginTop: 5,
    marginBottom: 20,
    position: 'absolute',
    bottom: 6
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
})


