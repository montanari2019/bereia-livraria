import { View } from "react-native";
import { styled } from "./styled";

export function Separator() {
  return (
    <View style={styled.separatorContainer}>
      <View style={styled.separator}></View>
    </View>
  );
}
