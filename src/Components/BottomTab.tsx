import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { RootBottomTabParams } from '../NavigationTypes/Types';
import Home from '../Screens/Home/Home';
import { Box } from '@gluestack-ui/themed';
import Service from '../Screens/Service/Service';
import Contact from '../Screens/Contact/Contact';
import Chat from '../Screens/Chat/Chat';
import CleaningService from '../Screens/Cleaning Service/CleaningService';
import Setting from '../Screens/Settings/Setting';
const Tab = createBottomTabNavigator<RootBottomTabParams>();
const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: 'black',
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    height: 90,
                    overflow: 'hidden',
                    width: '100%',
                    opacity: 0.7,
                    paddingVertical: 10,
                },
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = 'home';
                        return (
                            <Box
                                sx={{
                                    borderRadius: 5,
                                    backgroundColor:
                                        focused ? '#FA641D' : '#D1D1D1',
                                    padding: 8,
                                }}>
                                <Ionicons
                                    name="home"
                                    color={focused ? 'white' : 'black'}
                                    size={size}
                                />
                            </Box>
                        );
                    } else if (route.name === 'service') {
                        iconName = 'settings';
                        return (
                            <Box
                                sx={{
                                    borderRadius: 5,
                                    backgroundColor:
                                        focused ? '#FA641D' : '#D1D1D1',
                                    padding: 8,
                                }}>
                                <Ionicons
                                    name="settings"
                                    color={focused ? 'white' : 'black'}
                                    size={size}
                                />
                            </Box>
                        );
                    } else if (route.name === 'contact') {
                        iconName = 'user-large';
                        return (
                            <Box
                                sx={{
                                    borderRadius: 5,
                                    backgroundColor:
                                        focused ? '#FA641D' : '#D1D1D1',
                                    padding: 8,
                                }}>
                                <FontAwesome6
                                    name="user-large"
                                    color={focused ? 'white' : 'black'}
                                    size={size}
                                />
                            </Box>
                        );
                    }
                },
            })}>
            <Tab.Screen
                options={{
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarLabel: 'Home',
                }}
                name="home"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarLabel: 'Settings',

                }}
                name="service"
                component={Setting}
            />

            <Tab.Screen
                options={{
                    tabBarLabelStyle: { marginBottom: 10 },
                    tabBarLabel: 'Contact',

                }}
                name="contact"
                component={Contact}
            />

        </Tab.Navigator>
    );
};

export default BottomTab;

const styles = StyleSheet.create({});
