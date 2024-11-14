import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { screenNames } from '../constants/ScreenName';

import { Completed } from '../screens/Completed/Completed.screen';
import { TodoList } from '../screens/TodoList/TodoList.screen';
import { actuatedNormalize } from '../dimension/PixelScaling';

const Tab = createMaterialTopTabNavigator();

export function TabNav(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: actuatedNormalize(18) },
            tabBarLabel:{ focused: true, color: "pink"}
        }}
        >
            <Tab.Screen name={screenNames.TODO_LIST_TAB} component={TodoList} />
            <Tab.Screen name={screenNames.COMPLETED} component={Completed} />
        </Tab.Navigator>
    )
}
