import { supabase } from "@/services/supabase";
import { CoffeeShop } from "@/types";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const [shops, setShops] = useState<CoffeeShop[]>([]);

  useEffect(() => {
    const fetchShops = async () => {
      const { data, error } = await supabase
        .from("coffee_shops_tb")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        Alert.alert("คำเตือน", "พบปัญหาในการดึงข้อมูล กรุณารองใหม่อีกครั้ง");
        return;
      }

      setShops(data as CoffeeShop[]);
    };
    fetchShops();
  }, []);

  const showListShops = ({ item }: { item: CoffeeShop }) => (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "/detail",
          params: {
            name: item.name,
            district: item.district,
            description: item.description,
            image_url: item.image_url,
            phone: item.phone,
            latitude: item.latitude,
            longitude: item.longitude,
          },
        });
      }}
      style={styles.cardSty}
    >
      <Image
        source={{ uri: item.image_url }}
        style={{
          width: 100,
          height: 100,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.txtSty1}>{item.name}</Text>
        <Text style={styles.txtSty2}>📍{item.district}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={shops}
        keyExtractor={(item) => item.id}
        renderItem={showListShops}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txtSty1: {
    fontSize: 15,
    fontFamily: "Kanit_700Bold",
  },
  txtSty2: {
    fontFamily: "Kanit_400Regular",
    color: "#3d3d3d",
  },
  cardSty: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 8,
    backgroundColor: "#ffffff",
  },
});
