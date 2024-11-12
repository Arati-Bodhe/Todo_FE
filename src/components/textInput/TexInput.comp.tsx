import React from "react";
import { View, Text, TextInput} from "react-native";
import { style } from "./Style";

const TextInputComponent=(props)=>{
    const onChangeText=(val)=>{
      props.onChangeVal(val)
    }
    return(
        <View>
            <TextInput 
             placeholder={props.placeholder}
             value={props.value}
             onChangeText={(text)=>{onChangeText(text)}}
             style={style.inputBox}
            />
        </View>
    )
};
export {TextInputComponent}