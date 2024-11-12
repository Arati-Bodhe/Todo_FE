import React, { useEffect } from "react";
import { View,Text, TouchableOpacity } from "react-native";
import ApiConfig from "./src/config/Config";
import apiRequest from "./src/services/rootservice";
import { TextConstant } from "./src/constants/text";
import axios from "axios";

//console.log("env",ApiConfig.URL);

export const Home=({navigation})=>{
    useEffect(()=>{
    apiCall();
    },[])
     async function apiCall(){
      const body={
          email: "leo@gmail.com",
          password:"leo@123"
      }
   //   let response=await apiRequest("api/v1/users/login",body,TextConstant.POST);
    }
  return (
    <View>
      <Text>HOME</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <Text>goto profile</Text>
      </TouchableOpacity>
    </View>
  );
}