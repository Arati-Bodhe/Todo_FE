import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { screenNames } from '../constants/ScreenName';

import { Completed } from '../screens/Completed/Completed.screen';
import { TodoList } from '../screens/TodoList/TodoList.screen';
import { actuatedNormalize } from '../dimension/PixelScaling';
import { color } from '../constants/color';

const Tab = createMaterialTopTabNavigator();

export function TabNav(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: actuatedNormalize(18) },
            tabBarLabel:{ focused: true, color: "pink"}
        }}
        >
            <Tab.Screen options={{
                title:"TODO",
                tabBarActiveTintColor:color.LIGHT_GREEN,
                tabBarInactiveTintColor:"#636363",
                tabBarLabelStyle:{
                    fontWeight:"bold",
                    fontSize:actuatedNormalize(20)
                },
                swipeEnabled:true
            }} name={screenNames.TODO_LIST_TAB} component={TodoList} />
            <Tab.Screen 
             options={{
                title:"COMPLETED",
                tabBarActiveTintColor:color.LIGHT_GREEN,
                tabBarInactiveTintColor:"#636363",
                tabBarLabelStyle:{
                    fontWeight:"bold",
                    fontSize:actuatedNormalize(20)
                },
                swipeEnabled:true
             }}
            name={screenNames.COMPLETED} component={Completed} />
        </Tab.Navigator>
    )
}
