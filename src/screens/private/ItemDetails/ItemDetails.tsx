import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";
import { ProdutoProps, RoutesParamsProps } from "./interface/interface";

export default function ItemDetails() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();
  const route = useRoute();
  const { id } = route.params as RoutesParamsProps;

  const [produtoState, setProdutoState] = useState<ProdutoProps | null>();

  useFocusEffect(() => {});

  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.HOME_STACK_PRIVATE}>
      <View>
        <Text>ItemDetails</Text>
        <Text>{id}</Text>
      </View>
    </PanGestureHandlerGoBack>
  );
}
