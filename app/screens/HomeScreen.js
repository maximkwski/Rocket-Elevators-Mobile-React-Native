import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View,  Button, Alert, TouchableOpacity, FlatList} from 'react-native';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


// GET: api/elevators/status/Inactive 


const getElevators = async (setElevatorsData) => { 
    const resp = await axios.get("https://salty-woodland-19674.herokuapp.com/api/elevators/status/Inactive");
    if (resp.status == 200)  {
    console.log("list of elevators is :", resp.data); 
    
    setElevatorsData(resp.data)
    } 

}


const HomeScreen = () => {
    const [elevatorsData, setElevatorsData] = useState([]);
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    
    useEffect(() => {
    getElevators(setElevatorsData);
    }, [])

    useEffect(() => {
        console.log("elevators are:", elevatorsData);
      }, [elevatorsData]);

    const handleSignOut = () => {     
        navigation.replace('Welcome')
   }

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>List of inactive elevators:</Text>
        {/* <TouchableOpacity>{listElevators}</TouchableOpacity> */}
        <FlatList
        keyExtractor={(item) => item.id}
        data={elevatorsData}
        renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => {navigation.replace('ElevatorStatus', {itemId: item.id, itemStatus: item.elevator_status})}}>
                <Text style={styles.itemText} >Elevator Id: {item.id}</Text>
                <Text  style={styles.itemText}>Column Id: {item.column_id}</Text>
                <Text  style={styles.itemText}>Serial number: {item.serial_number}</Text>
                </TouchableOpacity>
            
             )}
        extraData={selectedId}
      />
         
        
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
    titleText: {
        marginTop: 60,
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
    },
    button: {
        width: '60%',
        backgroundColor: "#0782F9",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20,
        
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    item: {
        marginVertical: 8,
        backgroundColor: "#FA8072",
        paddingHorizontal: 60,
        paddingVertical: 10,
        borderRadius: 10,
        width: '100%'
    },
    itemText: {
        fontWeight: '500',
        fontSize: 16,
    }
})


// try {
//     const resp = await axios.get("https://salty-woodland-19674.herokuapp.com/api/elevators/status/Inactive");
//     if (resp.status == 200)  {
//     console.log("list of elevators is :", resp.data);       
//     } 
    

// } catch (error) {
//     console.warn("Error:", error)
// }