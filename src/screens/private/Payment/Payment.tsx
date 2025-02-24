import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { Text, View } from "react-native";

export default function Payment() {
  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.CARRINHO_STACK_PRIVATE}>
      <View>
        <Text>Payment</Text>
      </View>
    </PanGestureHandlerGoBack>
  );
}
