import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./AppStack";
import AppStack from "./AppStack";
import CustomDrawer from "./../components/CustomDrawer";
import TabNavigator from "./TabNavigator";

export default function RoootNavigator() {
  //const [userAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#e95a69",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            fontFamily: "Poppins-Light",
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="App" component={AppStack} />
        <Drawer.Screen name="HomeStack" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
