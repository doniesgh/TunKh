import React, { useRef, useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors, parameters } from "../global/styles";

import { AuthContext } from "../contexts/AuthContext";
const HomeScreen = ({ navigation }) => {
  const { userToken, userInfo } = useContext(AuthContext);
  //console.log("token",userToken)


  return (
    <View style={styles.container}>
     
      <Text style={{ fontSize: 15, fontFamily: "Poppins-Light" }}>
        Localistion :
      </Text>
     
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 9,
    paddingTop: parameters.statusBarHeight,
  },
  map: {
    height: 150,
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.92,
  },
  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color:colors.tunisys,
    fontFamily: "Poppins-Bold",
    marginTop: 5,
  },
});
