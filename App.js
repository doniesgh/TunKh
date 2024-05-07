import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppNav from "./src/navigation/AppNav";
import AuthProvider from "./src/contexts/AuthContext";

const App = () => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    SplashScreen.hideAsync();
  }, []);

  let [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/Poppins/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/Poppins/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("./assets/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Italic": require("./assets/Poppins/Poppins-Italic.ttf"),
    "Poppins-Black": require("./assets/Poppins/Poppins-Black.ttf"),
    "Poppins-BlackItalic": require("./assets/Poppins/Poppins-BlackItalic.ttf"),
    "Poppins-Regular": require("./assets/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
