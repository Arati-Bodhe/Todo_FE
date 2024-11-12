import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AddTodo, Login, Register, TodoList } from "../screens";

const Stack = createStackNavigator();

function StackNavigation() {
    return(
        <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LogIn" component={Login} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
      </Stack.Navigator>
    )
};
export {StackNavigation};