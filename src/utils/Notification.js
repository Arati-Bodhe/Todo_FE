import messaging from '@react-native-firebase/messaging';

async function GetDeviceToken(){
await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    return token;
    // console.log(`FCMATOKEN DEVICE IS : ${token}`)
};
export default GetDeviceToken;