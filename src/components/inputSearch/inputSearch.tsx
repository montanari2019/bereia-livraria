import { Text, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import { TextInput } from "react-native-gesture-handler";
import { THEME } from "@/src/theme/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";
import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";

export function InputSearch() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();

  function handleSearch() {
    navigator.navigate("searchStack");
  }
  return (
    <TouchableOpacity style={styled.searchInput} onPress={handleSearch}>
      <AntDesign name="search1" size={24} color={THEME.COLORS.GRAY_300} />
      <Text style={styled.inputSearch}>O que você gostaria de ler hoje ?</Text>
    </TouchableOpacity>
  );
}
