import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome as Icon, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

const Detail = () => {
  const navigate = useNavigation();

  function handleNavigateBack() {
    navigate.goBack();
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <Image
          source={{
            uri:
              "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/43/3f/88/bresil-part-iii-manaus.jpg",
          }}
          style={styles.pointImage}
        />
        <Text style={styles.pointName}>Feira de Manaus</Text>
        <Text style={styles.pointItems}>Óleo</Text>
        <Text style={styles.pointItems}>Plásticos</Text>
        <View style={styles.address}>
          <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>R. Pedro Botelho, 35</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <Icon name="whatsapp" size={20} color="#fff" />
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={() => {}}>
          <Feather name="mail" size={20} color="#fff" />
          <Text style={styles.buttonText}>E-mail</Text>
        </RectButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 45,
  },

  pointImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: "#322153",
    fontSize: 28,
    fontFamily: "Ubuntu_700Bold",
    marginTop: 24,
  },

  pointItems: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: "#6C6C80",
  },

  address: {
    marginTop: 32,
  },

  addressTitle: {
    color: "#322153",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },

  addressContent: {
    fontFamily: "Roboto_400Regular",
    lineHeight: 24,
    marginTop: 8,
    color: "#6C6C80",
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#999",
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: "48%",
    backgroundColor: "#34CB79",
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    marginLeft: 8,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
});

export default Detail;
