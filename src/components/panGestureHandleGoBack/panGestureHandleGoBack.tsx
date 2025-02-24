import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { PanGestureGoBackProps } from "./interface/interface";
import { StackRoutesNavigatorPublicProps } from "@/src/routes/stackRoutes/@types";

export function PanGestureHandlerGoBack({
  children,
  route,
}: PanGestureGoBackProps) {
  const navigator = useNavigation<StackRoutesNavigatorPublicProps>();

  function onSwipe(event: PanGestureHandlerGestureEvent) {
    // Detecta o arrasto para a direita (X positivo)
    if (event.nativeEvent.translationX > 100) {
      navigator.navigate(route);
    }
  }
  return (
    <PanGestureHandler onGestureEvent={onSwipe} minDist={10}>
      <View style={{ flex: 1 }}>{children}</View>
    </PanGestureHandler>
  );
}
