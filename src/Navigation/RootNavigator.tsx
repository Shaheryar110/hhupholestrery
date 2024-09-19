// src/navigation/RootNavigator.tsx

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../NavigationTypes/Types';

import Home from '../Screens/Home/Home';
import Setting from '../Screens/Settings/Setting';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from '../Components/BottomTab';
import Header from '../Components/Header';
import CleaningService from '../Screens/Cleaning Service/CleaningService';
import Header1 from '../Components/Header1';
import CommercialService from '../Screens/commercialService/CommercialService';
import Privacy from '../Screens/Privacy/Privacy';
import Feedback from '../Screens/Feedback/Feedback';
import Upholstery from '../Screens/Upholstery/Upholstery';


const RootNavigator = () => {
    const Stack = createNativeStackNavigator<BottomTabParamList>();
    return (
        <Stack.Navigator
            initialRouteName="BottomTab"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                animation: 'slide_from_right',
                animationDuration: 300,
            })}>
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen
                name="home"
                component={Home}
                options={({ route }) => ({
                    header: () => <Header />,
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="cleaningService"
                component={CleaningService}
                options={({ route }) => ({
                    header: () => <Header1 />,
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="commercialService"
                component={CommercialService}
                options={({ route }) => ({
                    header: () => <Header1 />,
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="Privacy"
                component={Privacy}
                options={({ route }) => ({
                    header: () => <Header1 />,
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="Feedback"
                component={Feedback}
                options={({ route }) => ({
                    header: () => <Header1 />,
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="Upholstery"
                component={Upholstery}
                options={({ route }) => ({
                    header: () => <Header1 />,
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
