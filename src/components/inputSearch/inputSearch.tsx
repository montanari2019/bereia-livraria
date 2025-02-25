import { View } from "react-native";
import { styled } from "./styled";
import { TextInput } from "react-native-gesture-handler";
import { THEME } from "@/src/theme/global";
import AntDesign from "@expo/vector-icons/AntDesign";

export function InputSearch() {
  return (
    <View style={styled.searchInput}>
      <AntDesign name="search1" size={24} color={THEME.COLORS.GRAY_300} />
      <TextInput
        style={styled.inputSearch}
        placeholderTextColor={THEME.COLORS.GRAY_300}
        placeholder="O que você gostaria de ler hoje ?"
      />
    </View>
  );
}
