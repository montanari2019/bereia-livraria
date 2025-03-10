import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRoutesTypeProps } from "./@types";

import LoginHome from "@/src/screens/public/LoginScreen/LoginScreen";
import SignIn from "@/src/screens/public/SingIn/SingIn";
import SignUp from "@/src/screens/public/SingUp/SingUp";
import ForgotPassword from "@/src/screens/public/ForgotPassword/ForgotPassword";
import { THEME } from "@/src/theme/global";
import { StatusBar } from "react-native";

const { Navigator, Screen } =
  createNativeStackNavigator<StackRoutesTypeProps>();

export default function StackRoute() {
  return (
    <>
      <StatusBar
        backgroundColor={THEME.COLORS.GRAY_600}
        barStyle={"light-content"}
        translucent={true}
      />
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="loginHome" component={LoginHome} />
        <Screen name="signIn" component={SignIn} />
        <Screen name="signUp" component={SignUp} />
        <Screen name="forgot" component={ForgotPassword} />
      </Navigator>
    </>
  );
}
