import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./Style";
import { screenNames } from "../../constants/ScreenName";
import { useNavigation } from "@react-navigation/native";

export const TodoList=({navigation})=>{
  const gotoAddTask=()=>{
    console.log('comgn here');
   navigation.replace(screenNames.ADD_TODO)
  }
  return(
    <View style={styles.container}>
      <View style={styles.imgView}>
        <TouchableOpacity onPress={()=>{gotoAddTask()}}>
      <Image source={require("../../assets/AddTask.png")} 
      style={styles.img}
      />
</TouchableOpacity>
      </View>
        </View>
  )
}