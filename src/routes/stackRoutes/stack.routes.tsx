import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRoutesTypeProps } from "./@types";
import SignIn from "../../screens/SingIn/SingIn";
import SignUp from "../../screens/SingUp/SingUp";
import LoginHome from "@/src/screens/LoginScreen/LoginScreen";

const { Navigator, Screen } =
  createNativeStackNavigator<StackRoutesTypeProps>();

export default function StackRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="loginHome" component={LoginHome} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
