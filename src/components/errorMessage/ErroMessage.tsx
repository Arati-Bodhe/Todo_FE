import React from "react";
import {View,Text} from "react-native";

export const ErrorMessage=(props)=>{
    return(
        <View>
            <Text>{props.errMessage}</Text>
        </View>
    )
}