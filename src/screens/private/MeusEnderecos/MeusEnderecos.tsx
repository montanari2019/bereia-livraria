import { HeaderProfilePages } from "@/src/components/headerProfilePages/headerProfilePages";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { Text, View } from "react-native";

export function MeusEnderecos() {
  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.PROFILE_STACK_PRIVATE}>
      <View>
        <HeaderProfilePages titlePage="Meus Enderecos" />
      </View>
    </PanGestureHandlerGoBack>
  );
}
