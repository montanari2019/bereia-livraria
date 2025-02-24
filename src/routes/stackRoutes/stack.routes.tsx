import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRoutesTypeProps } from "./@types";

import LoginHome from "@/src/screens/public/LoginScreen/LoginScreen";
import SignIn from "@/src/screens/public/SingIn/SingIn";
import SignUp from "@/src/screens/public/SingUp/SingUp";
import ForgotPassword from "@/src/screens/public/ForgotPassword/ForgotPassword";

const { Navigator, Screen } =
  createNativeStackNavigator<StackRoutesTypeProps>();

export default function StackRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="loginHome" component={LoginHome} />
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
      <Screen name="forgot" component={ForgotPassword} />
    </Navigator>
  );
}
