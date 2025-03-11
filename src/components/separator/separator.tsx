import { View } from "react-native";
import { styled } from "./styled";
interface SeparatorProps {
  alignItems?: "center" | "baseline" | "flex-end" | "flex-start" | "stretch";
  height?: number;
}
export function Separator({
  alignItems = "center",
  height = 5,
}: SeparatorProps) {
  return (
    <View
      style={{
        ...styled.separatorContainer,
        alignItems,
      }}
    >
      <View
        style={{
          ...styled.separator,
          height,
        }}
      ></View>
    </View>
  );
}
