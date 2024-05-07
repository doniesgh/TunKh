import React, { useState, useEffect, useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../constants/Colors";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "./../contexts/AuthContext";


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    
      <Stack.Screen name="Login" component={LoginScreen} />
   
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: "white",
      tabBarActiveTintColor: "white",
      tabBarStyle: {
        backgroundColor: "#e95a69",
      },
    }}
    >
      <Tab.Screen
        name="Home1"
        component={HomeStack}
        options={({ route }) => ({
          //tabBarStyle :{display:'none'},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />

    </Tab.Navigator>
  );
};
export default TabNavigator;
