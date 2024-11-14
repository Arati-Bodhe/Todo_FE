import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { TextConstant } from "../../constants/text";
import { Loader, TextInput } from "../../components";
import { color } from "../../constants/color";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoCall } from "../../redux/slices/AddTodo.Slice";
import { screenNames } from "../../constants/ScreenName";


export const AddTodo = ({ navigation }) => {
  const dispatch=useDispatch();
  const userSelector=useSelector(state=>state.login);
  const addTodoSelector=useSelector(state=>state.addTodo)
 const[task,setTask]=useState({
  title:"",
  description:""
 });
 const[error,setError]=useState('');
 const onChangeTitle=(data:string)=>{
   setTask({...task,title:data})
 }
 const onChangeDescription=(data:string)=>{
  setTask({...task,description:data})
 };
 const onSubmitTask=async()=>{
  if (!task.title || !task.description) {
    setError("ALL fields are required")
  }else{
    setError("");
    console.log("task submit ",task,userSelector?.data?._id);
     dispatch(AddTodoCall(task));
     navigation.navigate(screenNames.TODO_LIST)
  }
 }
  return (
    // <Loader isLoading={addTodoSelector.loading}>
      <View style={styles.container}>
        <Text style={styles.topHead}>{TextConstant.TO_DO}</Text>
        <TextInput
          placeholder="Title"
          value={task.title}
          onChangeVal={onChangeTitle}
        />
        <TextInput
          placeholder="Description"
          value={task.description}
          onChangeVal={onChangeDescription}
        />
        <TouchableOpacity onPress={()=>onSubmitTask()}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[color.PURPLE, color.PINK, color.CORAL]}
            style={styles.buttonView}
          >
            <Text style={styles.btnText}>SUBMIT</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      // </Loader>
  )
}