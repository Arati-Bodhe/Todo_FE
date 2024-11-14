import React, { useEffect, useState } from "react";
import { View,Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./Style";
import { screenNames } from "../../constants/ScreenName";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoCall } from "../../redux/slices/FetchTodo.Slice";
import { TodoComp } from "../../components";

export const TodoList=({navigation})=>{
  const dispatch=useDispatch();
  const userSelector=useSelector(state=>state.login);
  const todoSelector=useSelector(State=>State.fetchTodo);
  const[userid,setUserId]=useState('');
  const[todoList,setTodoList]=useState([]);
  useEffect(()=>{
    const userID=userSelector.data._id
    setUserId(userID);
    dispatch(fetchTodoCall(userID))
  },[])
  useEffect(()=>{
  console.log("todoSelector ",typeof todoSelector.data);
   setTodoList(todoSelector.data)
  },[todoSelector.loading])
  const gotoAddTask=()=>{
    console.log('comgn here');
   navigation.replace(screenNames.ADD_TODO)
  }
   const renderItem=(item)=>{
    return(
      <View>
        <TodoComp 
         title={item.title}
         description={item.description}
        />
      </View>
    )
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

      <FlatList
       data={todoList}
       renderItem={({item})=>renderItem(item)}
       />
        </View>
  )
}