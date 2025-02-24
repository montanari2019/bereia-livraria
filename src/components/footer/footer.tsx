import { Text, View } from "react-native";
import { styled } from "./styled";

export function Footer() {
  return (
    <View style={styled.containerFooter}>
      <Text style={styled.textFooter}>
        © 2025 - Developement by Montanari Soft.
      </Text>
    </View>
  );
}
