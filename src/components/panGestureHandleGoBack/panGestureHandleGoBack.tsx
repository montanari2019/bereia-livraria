import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { PanGestureGoBackProps } from "./interface/interface";

export function PanGestureHandlerGoBack({ children }: PanGestureGoBackProps) {
  const navigator = useNavigation();

  function onSwipe(event: PanGestureHandlerGestureEvent) {
    // Detecta o arrasto para a direita (X positivo)
    if (event.nativeEvent.translationX > 100) {
      navigator.goBack();
    }
  }
  return (
    <PanGestureHandler onGestureEvent={onSwipe} minDist={10}>
      <View style={{ flex: 1 }}>{children}</View>
    </PanGestureHandler>
  );
}
