import { StyleSheet } from "react-native";
import { actuatedNormalize, actuatedNormalizeVertical } from "../../dimension/PixelScaling";
import { color } from "../../constants/color";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:actuatedNormalizeVertical(10),
        marginHorizontal:actuatedNormalize(15),
        paddingVertical:actuatedNormalizeVertical(9),
        paddingLeft:actuatedNormalize(30),
        backgroundColor:color.LIGHT_YELLOW,
        borderRadius:actuatedNormalize(5)
    },
    title:{
        fontSize:actuatedNormalize(18),
        fontWeight:"bold",
        color:color.BLACK,
    },
    description:{
        fontSize:actuatedNormalize(15),
        color:color.CHARCOAL
    },
    textContainer:{
        width:actuatedNormalize(220),
    },
    delteIcon:{
        width:actuatedNormalize(35),
        height:actuatedNormalizeVertical(30),
    },
    editIcon:{
        width:actuatedNormalize(30),
        height:actuatedNormalizeVertical(25),
        marginBottom:actuatedNormalizeVertical(5)
    },
    iconContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"center",
        marginRight:actuatedNormalize(15)
    }
})