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
        paddingLeft:actuatedNormalize(15),
        // backgroundColor:"#cce7c9",
        borderRadius:actuatedNormalize(5)
    },
    title:{
        fontSize:actuatedNormalize(18),
        fontWeight:"bold",
        color:color.BLACK,
    },
    description:{
        fontSize:actuatedNormalize(15),
        color:color.CHARCOAL,
    },
    textContainer:{
        width:actuatedNormalize(300),
    },
    delteIcon:{
        width:actuatedNormalize(35),
        height:actuatedNormalizeVertical(30),
    },
    editIcon:{
        width:actuatedNormalize(30),
        height:actuatedNormalizeVertical(25),
        marginBottom:actuatedNormalizeVertical(5),
        alignSelf:"flex-end"
    },
    
    checkbox: {
        alignSelf: 'center',
      },
})