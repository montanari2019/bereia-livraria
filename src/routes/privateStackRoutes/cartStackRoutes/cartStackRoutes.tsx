import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cart from "@/src/screens/private/Cart/Cart";
import Payment from "@/src/screens/private/Payment/Payment";
import { CartStackRoutesTypeProps } from "./@types";

const { Navigator, Screen } =
  createNativeStackNavigator<CartStackRoutesTypeProps>();

export default function CartStackRoutePrivate() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="carrinhoStack" component={Cart} />
      <Screen name="paymentStack" component={Payment} />
    </Navigator>
  );
}
