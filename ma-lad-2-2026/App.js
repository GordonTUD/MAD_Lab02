import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Logo from "./components/Logo";

export default function App() {
  const [fname, setFname] = useState("Joe");
const [lname, setLname] = useState("Bloggs");
const [dob, setDob] = useState("13 February 1991");
  
  return (
    <View>
    <Logo/>
    <Text>Hello {fname} {lname}. You were born on {dob}</Text>  
      <TextInput
        placeholder="enter your name"
        onChangeText={(value) => setFulname(value)}
        
      ></TextInput>
      <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
      <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
<TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>


    </View>
  );
}