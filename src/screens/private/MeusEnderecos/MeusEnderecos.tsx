import { CardEndereco } from "@/src/components/cardEndereco/cardEndereco";
import { HeaderProfilePages } from "@/src/components/headerProfilePages/headerProfilePages";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { Text, View } from "react-native";
import { styled } from "./styled";

export function MeusEnderecos() {
  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.PROFILE_STACK_PRIVATE}>
      <View>
        <HeaderProfilePages titlePage="Meus Enderecos" />
        <View style={styled.container}>
          <CardEndereco />
        </View>
      </View>
    </PanGestureHandlerGoBack>
  );
}
