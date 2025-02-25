import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackRoutesTypeProps } from "./@types";
import Home from "@/src/screens/private/Home/Home";
import ItemDetails from "@/src/screens/private/ItemDetails/ItemDetails";
import { StatusBar } from "react-native";
import { THEME } from "@/src/theme/global";

const { Navigator, Screen } =
  createNativeStackNavigator<HomeStackRoutesTypeProps>();

export default function HomeStackRoutePrivate() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="homeStack" component={Home} />
      <Screen name="itemStack" component={ItemDetails} />
    </Navigator>
  );
}
