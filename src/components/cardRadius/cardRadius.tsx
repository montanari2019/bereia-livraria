import { View } from "react-native";
import { CardRadiusProps } from "./interface/cardRadius.interface";
import { styled } from "./styled";

export function CardRadius({ children, ...resto }: CardRadiusProps) {
  return (
    <View
      style={{
        ...styled.container,
        ...resto,
      }}
    >
      {children}
    </View>
  );
}
