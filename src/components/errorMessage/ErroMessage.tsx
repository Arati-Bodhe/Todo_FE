import React from "react";
import {View,Text} from "react-native";
import { color } from "../../constants/color";
import { actuatedNormalize, actuatedNormalizeVertical } from "../../dimension/PixelScaling";

export const ErrorMessage=(props)=>{
    return(
        <View>
            <Text
            style={{
                color:color.ERROR,
                fontSize:actuatedNormalize(15),
                textAlign:"left",
                width:actuatedNormalize(300),
                marginTop:actuatedNormalizeVertical(5),
            }}
            >{props.errMessage}</Text>
        </View>
    )
}