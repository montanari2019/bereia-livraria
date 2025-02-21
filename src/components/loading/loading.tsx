import { ActivityIndicator, Text, View } from "react-native";
import { THEME } from "../../theme/global";
import { LoadingProps } from "./interfaces/LoadiingProps";
import { styled } from "./styled";

export function Loading({
  color = THEME.COLORS.BEREIA_YELLOW,
  textFild = false,
}: LoadingProps) {
  return (
    <View style={styled.container}>
      <ActivityIndicator color={color} />
      {textFild && <Text style={styled.textFild}>Carregando ...</Text>}
    </View>
  );
}
