import Home from "@/src/screens/private/Home/Home";
import ItemDetails from "@/src/screens/private/ItemDetails/ItemDetails";
import Search from "@/src/screens/private/Search/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackRoutesTypeProps } from "./@types";

const { Navigator, Screen } =
  createNativeStackNavigator<HomeStackRoutesTypeProps>();

export default function HomeStackRoutePrivate() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="homeStack" component={Home} />
      <Screen name="itemStack" component={ItemDetails} />
      <Screen name="searchStack" component={Search} />
    </Navigator>
  );
}
