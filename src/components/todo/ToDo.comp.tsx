import React from "react";
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
    return(
        <View style={styles.container}>
        <View style={styles.textContainer} >
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={()=>{
                console.log("ID IS",props.id);
            }}>
            <Image 
             source={require("../../assets/delete_todo.jpg")}
             resizeMode="contain"
             style={styles.delteIcon}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onpressEdit()}>
             <Image 
             source={require("../../assets/edit_Todo.jpg")}
             resizeMode="contain"
             style={styles.editIcon}
            />
            </TouchableOpacity>
        </View>
        </View>

    )
}
