import React, { useState } from "react";
import { View ,Text, Image, TouchableOpacity} from "react-native";
import { styles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { screenNames } from "../../constants/ScreenName";

export const TodoComponent=(props)=>{
    const navigation=useNavigation();
    const onpressEdit=()=>{
        navigation.navigate(screenNames.ADD_TODO,{
            title:props?.title,
            description:props?.description,
            editTask:true,
            taskId:props.id
        })
    }
    const onLongPress=()=>{
        props.onLongPress(true,props.id);
    }
    return(
        <View style={[styles.container,{backgroundColor:props.bgColor}]}>
        <TouchableOpacity 
          onLongPress={()=>onLongPress()}
          style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
          }}
         >
        <View style={styles.textContainer} >
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.description}>{props.createdAt}</Text>
        </View>
         <TouchableOpacity onPress={()=>onpressEdit()}>
             <Image 
             source={require("../../assets/edit_Todo.jpg")}
             resizeMode="contain"
             style={styles.editIcon}
            />
         </TouchableOpacity>
        </TouchableOpacity>
        </View>

    )
}
