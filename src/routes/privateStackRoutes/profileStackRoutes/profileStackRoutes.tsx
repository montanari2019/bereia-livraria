import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackRoutesTypeProps } from "./@types";
import Profile from "@/src/screens/private/Profile/Profile";
import MinhasCompras from "@/src/screens/private/MinhasCompras/MinhasCompras";

const { Navigator, Screen } =
  createNativeStackNavigator<ProfileStackRoutesTypeProps>();

export default function ProfileStackRoutePrivate() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="profileStack" component={Profile} />
      <Screen name="minhasComprasStack" component={MinhasCompras} />
    </Navigator>
  );
}
