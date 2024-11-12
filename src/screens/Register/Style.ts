import { StyleSheet } from "react-native";
import { actuatedNormalize, actuatedNormalizeVertical } from "../../dimension/PixelScaling";
import { color } from "../../constants/color";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    buttonView:{
        marginVertical: actuatedNormalizeVertical(40),
        //backgroundColor:color.PRIMARY,
        paddingVertical: actuatedNormalizeVertical(10),
        width:actuatedNormalize(320),
        alignSelf:'center',
        borderRadius:actuatedNormalize(10)
    },
    btnText:{
        color:"FFFFFF",
        textAlign:'center',
        fontSize:actuatedNormalize(20),
        fontWeight:'500'
    },
    topHead:{
        fontSize:actuatedNormalize(40),
        color:"#ff4500"
    }
})