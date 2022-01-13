import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import rootNavigation from './rootNavigation';
import { useSelector } from 'react-redux';
import AuthNavigator from '@screens/Auth'

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    //const user = useSelector((state: any) => state.user.data)
    const user = {_id: null};
    return (
        <NavigationContainer ref={rootNavigation.navigationRef}>
            <AuthNavigator/>
        </NavigationContainer>
    )
}

export default RootNavigation;