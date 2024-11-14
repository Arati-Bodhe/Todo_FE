import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AddTodo, Login, Register, TodoList } from "../screens";
import { screenNames } from "../constants/ScreenName";
import { TabNav } from "./Tab";
import { Todo } from "../screens/Todo/Todo.Screen";

const Stack = createStackNavigator();

function StackNavigation() {
    return(
        <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
        <Stack.Screen name={screenNames.LOGIN} component={Login} />
        <Stack.Screen name={screenNames.REGISTER} component={Register} />
        <Stack.Screen name={screenNames.TODO} component={TabNav} />
        <Stack.Screen name={screenNames.ADD_TODO} component={AddTodo} />
      </Stack.Navigator>
    )
};
export {StackNavigation};