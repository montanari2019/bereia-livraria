import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function ItemDetails() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();

  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.HOME_STACK_PRIVATE}>
      <View>
        <Text>ItemDetails</Text>
      </View>
    </PanGestureHandlerGoBack>
  );
}
