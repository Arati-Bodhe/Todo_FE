import { StyleSheet } from "react-native";
import { color } from "../../constants/color";
import { actuatedNormalize, actuatedNormalizeVertical } from "../../dimension/PixelScaling";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:color.PINK
    },
    img:{
        width:actuatedNormalize(50),
        height:actuatedNormalize(50),
    },
    imgView:{
        alignItems:'flex-end',
        marginTop:actuatedNormalizeVertical(20),
        marginRight:actuatedNormalize(8),
        marginBottom:actuatedNormalizeVertical(10)
    }
})