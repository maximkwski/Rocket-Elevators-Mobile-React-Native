import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const ElevatorStatusScreen =  ({route, navigation}) => {
  const {itemId, itemStatus} = route.params;
  const [currentElevator, setCurrentElevator] = useState({id: itemId, elevator_status: itemStatus});
  
  const changeToActive = async () => {
    try {

      const resp2 =  await axios.put(`https://salty-woodland-19674.herokuapp.com/api/elevators/${itemId}/active`);
      console.log("my resp2 is: ",resp2.data);
      if (resp2.status == 200)  {
        setCurrentElevator(resp2.data);
      }
    } catch (error) {
      console.warn("Error:", error)
    }
    console.log("current elev data is: ", currentElevator)
  }

  const changeToInactive = async () => {
    try {

      const resp3 =  await axios.put(`https://salty-woodland-19674.herokuapp.com/api/elevators/${itemId}/inactive`);
      console.log("my resp3 is: ",resp3.data);
      if (resp3.status == 200)  {
        setCurrentElevator(resp3.data);

      }
    } catch (error) {
      console.warn("Error:", error)
    }
    console.log("current elev data is: ", currentElevator)
  }
  
  return (
   <View style={styles.container}>
      <View style={styles.elevatorInfo}>
       <Text style={styles.infoText}>Elevator</Text>
       <Text style={styles.infoText}>Id: {currentElevator.id}</Text>
      <Text style={styles.infoText}>Status: {currentElevator.elevator_status}</Text> 
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity  style={styles.statusButton} onPress={changeToActive}>
            <Text style={styles.buttonText}>Active</Text>
          </TouchableOpacity> 
          <TouchableOpacity  style={styles.statusButton} onPress={changeToInactive}>
            <Text style={styles.buttonText}>Inactive</Text>
          </TouchableOpacity>              
     </View> 
   <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Home')}}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
   </View>

  )
}

export default ElevatorStatusScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FA8072",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  elevatorInfo: {
    marginVertical: 20,
    alignItems: 'center',
    
  },
  infoText: {
    fontWeight: '700',
    fontSize: 16,
    paddingVertical: 3
  },
  buttonContainer: {
    flexDirection: "row"
  },
  statusButton: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 10,
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


