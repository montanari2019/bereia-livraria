import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { HeaderProfilePagesProps } from "./interface/inteface";
import { styled } from "./styled";
import { THEME } from "@/src/theme/global";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { PanGestureHandlerGoBack } from "../panGestureHandleGoBack/panGestureHandleGoBack";
import { useNavigation } from "@react-navigation/native";

export function HeaderProfilePages({ titlePage }: HeaderProfilePagesProps) {
  const navigator = useNavigation();
  function handleGoBack() {
    navigator.goBack();
  }
  return (
    <View style={styled.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <AntDesign name="left" size={24} color={THEME.COLORS.GRAY_100} />
      </TouchableOpacity>

      <Text style={styled.textItemName}>{titlePage}</Text>

      <TouchableOpacity>
        <AntDesign name="left" size={24} color={THEME.COLORS.BEREIA_BRONW} />
      </TouchableOpacity>
    </View>
  );
}
