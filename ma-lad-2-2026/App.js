import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Logo from "./components/Logo";

export default function App() {
  const [fname, setFname] = useState("Joe");
const [lname, setLname] = useState("Bloggs");
const [dob, setDob] = useState("13 February 1991");
  function buttonClicked() {
    //Alert.alert("button clicked"); //This works on a mobile phone
    alert("Hello, "+ fname + " "+ lname +  " you were born on "+ dob, ); // this works on the web version - try uncommenting one or the other lines as necessary
}
  return (
    <View style={styles.container}>
    <Logo/>
    <Text style={styles.text}>Hello {fname} {lname}. You were born on {dob}</Text>  
      
      <TextInput style={styles.input} placeholder="Enter your firstname" onChangeText={setFname}/>
      <TextInput style={styles.input} placeholder="Enter your lastname" onChangeText={setLname}/>
<TextInput style={styles.input} placeholder="Enter your date of birth" onChangeText={setDob}/>
<Button title="SUBMIT" onPress={buttonClicked}/>

    </View>
  );
}
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
justifyContent: 'center',
backgroundColor: '#fff',
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 10,
marginVertical: 8,
},
text: {
fontSize: 16,
marginVertical: 10,
},
});

