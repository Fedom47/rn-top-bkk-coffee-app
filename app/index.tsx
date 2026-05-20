import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/home");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/coffeeshop.png")}
        style={styles.imgeSty}
      />

      <Text style={styles.txtSty1}>TOP BKK COFFEE</Text>
      <Text style={styles.txtSty2}>ที่สุดของร้านกาแฟในกรุงเทพฯ</Text>
      <ActivityIndicator
        size="large"
        color="#301300"
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txtSty1: {
    fontFamily: "Kanit_700Bold",
    fontSize: 30,
    marginTop: 20,
    color: "#3b0e00",
  },
  txtSty2: {
    fontFamily: "Kanit_400Regular",
    color: "#929292",
  },
  imgeSty: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
