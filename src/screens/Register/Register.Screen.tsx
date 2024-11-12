import React, { useEffect, useState } from "react";
import { View,Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Error, TextInput } from "../../components";
import { styles } from "./Style";
import { TextConstant } from "../../constants/text";
import { color } from "../../constants/color";
import { useDispatch, useSelector } from "react-redux";
import {registerUser} from "../../redux/slices/Register.Slice";



export const Register=({navigation})=>{
  const registerSelector = useSelector((state) => state.register);
  const [user,setUser]=useState({
    email:"",
    password:"",
    fullName:""
  });
  const[error,setError]=useState('');
  const dispatch=useDispatch();
  const onChangeEmail=(data)=>{
    setUser({...user,email:data});
  }
  const onChangePassword=(data)=>{
    setUser({...user,password:data});
  }
  const onChangeFullName=(data)=>{
    setUser({...user,fullName:data})
  }
useEffect(()=>{
  console.log("data is", registerSelector);
},[registerSelector.loading])
  const onRegister=()=>{
    if (user.email=="" || user.password == "" || user.fullName=="") {
      setError("All fields are required")
    }else{
      setError('')
      dispatch(registerUser(user));
    }
  }
  return(
    <View style={styles.container}>
        <Text style={styles.topHead}>{TextConstant.REGISTER}</Text>
        <TextInput
        placeholder="fullname"
        value={user.fullName}
        onChangeVal={onChangeFullName}
        />
        <TextInput
        placeholder="email"
        value={user.email}
        onChangeVal={onChangeEmail}
        />
        <TextInput
        placeholder="password"
        value={user.password}
        onChangeVal={onChangePassword}
        />
                 {
          error && (
            <Error
             errMessage={error}
            />
          )
        }
        <TouchableOpacity  onPress={()=>onRegister()}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[color.PURPLE, color.PINK, color.CORAL]}
          style={styles.buttonView}
        >
          <Text style={styles.btnText}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>

    </View>
  )
}