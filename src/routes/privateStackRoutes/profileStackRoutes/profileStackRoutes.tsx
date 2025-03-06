import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackRoutesTypeProps } from "./@types";
import Profile from "@/src/screens/private/Profile/Profile";
import MinhasCompras from "@/src/screens/private/MinhasCompras/MinhasCompras";
import { MinhasAssinaturas } from "@/src/screens/private/MinhasAssinaturas/MinhasAssinaturas";
import { MeusEnderecos } from "@/src/screens/private/MeusEnderecos/MeusEnderecos";

const { Navigator, Screen } =
  createNativeStackNavigator<ProfileStackRoutesTypeProps>();

export default function ProfileStackRoutePrivate() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="profileStack" component={Profile} />
      <Screen name="minhasComprasStack" component={MinhasCompras} />
      <Screen name="minhasAssinaturasStack" component={MinhasAssinaturas} />
      <Screen name="meusEnderecosStack" component={MeusEnderecos} />
    </Navigator>
  );
}
