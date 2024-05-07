import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors, parameters } from "../global/styles";
import { useNavigation } from "@react-navigation/native";

const SerachFilter = ({ data, input, setInput }) => {
  const navigation = useNavigation();

  const navigateToDetails = (item) => {
    navigation.navigate("DetailsEquip", { equipmentDetails: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input !== "" && !item.equipement_sn.includes(input)) {
            return null;
          }

          return (
            <TouchableOpacity onPress={() => navigateToDetails(item)}>
            <View style={styles.card} >
              <Text style={styles.te}>
                <Text style={styles.t}>Equipement SN :</Text> {item.equipement_sn}
              </Text>
              <Text style={styles.te}>
                <Text style={styles.t}>EquipementType :</Text> {item.equipement_type}
              </Text>
              <Text style={styles.te}>
                <Text style={styles.t}>Modéle :</Text> {item.modele}
              </Text>
              {/*<TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {
                  navigateToDetails(item);
                }}
              >
                <Text style={styles.detailsButtonText}>Details</Text>
              </TouchableOpacity>*/}
            </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default SerachFilter;

const styles = StyleSheet.create({
  detailsButton: {
    borderRadius: 8,
    padding: 5,
    marginLeft: 240,
    backgroundColor:"#57c94d"
  },
  detailsButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
   
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 10,
    padding: 9,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 23,
    marginLeft: 15,
    marginBottom: 5,
    color: "black",
    textAlign: "center",
  },
  t: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  te: {
    fontFamily: "Poppins-Light",
    fontSize: 15,
    color: "#696969",
  },
  card: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#f1f1f3",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.03,
    shadowRadius: 16,
    position: "relative",
    marginTop: 1,
  },
});
