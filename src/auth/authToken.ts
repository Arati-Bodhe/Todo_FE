import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextConstant } from "../constants/text";
function setAuth(tokens){
const accessToken=tokens?.authorization;
const refreshToken=tokens?.refreshtoken;
//console.log("tokens in setauth",accessToken, "and refreshtoken ",refreshToken);
 AsyncStorage.setItem(TextConstant.ACCESS_TOKEN,`Bearer ${accessToken}`);
 AsyncStorage.setItem(TextConstant.REFRESH_TOKEN,`Bearer ${refreshToken}`);
};
async function getAuth(){
    try {
      const ACCESS_TOKEN= await AsyncStorage.getItem(TextConstant.ACCESS_TOKEN)
      
       const REFRESH_TOKEN=await AsyncStorage.getItem(TextConstant.REFRESH_TOKEN)
       return{ACCESS_TOKEN,REFRESH_TOKEN}
    } catch (error) {
        console.error("Error retrieving tokens:", error);
        return null; 
    }
}
export{setAuth,getAuth}