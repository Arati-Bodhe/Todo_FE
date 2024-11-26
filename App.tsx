import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidStyle } from '@notifee/react-native';
import MainNav from './src/navigation/Main';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import GetDeviceToken from './src/utils/Notification';
import { Alert } from 'react-native';

function App() {
  useEffect(() => {
   GetDeviceToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      onDisplayNotification(remoteMessage);
    });
    return unsubscribe;
  }, []);
  
  async function onDisplayNotification(Notification:{}) {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    await notifee.displayNotification({
      title: Notification?.notification?.title,
      body: Notification?.notification?.body,
      android: {
        smallIcon:'ic_launcher',
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    })
  }

  return (
    <Provider store={store}>
   <MainNav />
    </Provider>
  );
}


export default App;
