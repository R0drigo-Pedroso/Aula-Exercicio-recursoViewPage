import React from "react";
import { StyleSheet, View, Image, ImageBackground, Alert } from "react-native";
import PagerView from "react-native-pager-view";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import image01 from "./image/teste01.jpg";
import image02 from "./image/teste02.jpg";
import image03 from "./image/teste03.jpg";

const clickFoto = (foto) => {
  switch (foto) {
    case "foto01":
      Alert.alert("teste 01");
      break;
    case "foto02":
      Alert.alert("teste 02");
      break;
    case "foto03":
      Alert.alert("teste 03");
      break;
    default:
      console.log(`Nenhuma imagem clicada`);
  }
};

const MyPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <Pressable
          style={styles.page}
          key="1"
          onPress={() => clickFoto("foto01")}
        >
          <Image style={styles.teste} source={image01} />
        </Pressable>

        <Pressable
          style={styles.page}
          key="2"
          onPress={() => clickFoto("foto02")}
        >
          <ImageBackground style={styles.teste} source={image02} />
        </Pressable>
        <Pressable
          style={styles.page}
          key="3"
          onPress={() => clickFoto("foto03")}
        >
          <Image style={styles.teste} source={image03} />
        </Pressable>
      </PagerView>
    </View>
  );
};

/* onPress={clickFoto} */

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },

  teste: {
    width: "100%",
    height: "100%",
  },
});

export default MyPager;
