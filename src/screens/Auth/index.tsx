import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createNativeStackNavigator();
const index = () => {
    return (
        <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='LoginScreen'
            >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
        </Stack.Navigator>
    )
}

export default index