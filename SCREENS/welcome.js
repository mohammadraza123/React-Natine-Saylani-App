import React from 'react';
import {View, Text,Image,StyleSheet,Pressable,TouchableOpacity, } from "react-native"



const welcome =({navigation})=> {
  return (
    <View style={styles.container}>
    
      <Image  source={require("../assests/Logo.png")} />
      <Text style={styles.heading} >SAYLANI WELFARE</Text>
      <Text style={styles.second}>Online Discount Store</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Signup')}
     title="Go to Details"
     style={{
      backgroundColor: '#61B842',
      fontWeight : 'bold',
      marginTop : 190, 
      padding : 10,
      borderRadius : 12,
      width : 180}}>
        <Text style = {{fontSize : 25 , textAlign : 'center'}}>Get Started</Text></TouchableOpacity>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin : 'auto',
    marginTop: 90,
  
    alignItems : 'center', 
  },
  heading : {
    fontSize : 30,
    fontWeight : 'bold',
    color : '#61B846',
    marginTop : 20
  },
  second : {
    color : 'blue',
    fontSize : 17,
  },
  button : {
    marginBottom : 50,
    fontSize : 20,
    color : 'red',
  },
  
 
});


export default welcome;
