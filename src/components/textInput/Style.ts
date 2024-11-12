import { StyleSheet } from "react-native";
import { color } from "../../constants/color";
import { actuatedNormalize, actuatedNormalizeVertical } from "../../dimension/PixelScaling";

export const style=StyleSheet.create({
    container:{
      //  flex:1,
        justifyContent:"center",
        alignItems:"center",
        },
    inputBox:{
        width: actuatedNormalize(320),
        paddingVertical:actuatedNormalizeVertical(15),
        paddingLeft:actuatedNormalize(10),
        marginHorizontal:actuatedNormalize(10),
        borderBottomWidth:actuatedNormalize(2),
        borderRadius:actuatedNormalize(10),
        marginVertical:actuatedNormalizeVertical(20),
        borderColor:color.PURPLE
    }
})