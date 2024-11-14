import React from "react";
import { View ,Text, Image} from "react-native";
import { styles } from "./Style";

export const TodoComponent=(props)=>{
    return(
        <View style={styles.container}>
        <View style={styles.textContainer} >
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
        <View style={styles.iconContainer}>
            <Image 
             source={require("../../assets/delete_todo.jpg")}
             resizeMode="contain"
             style={styles.delteIcon}
            />
             <Image 
             source={require("../../assets/edit_Todo.jpg")}
             resizeMode="contain"
             style={styles.editIcon}
            />
        </View>
        </View>

    )
}
