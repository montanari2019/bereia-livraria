import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { THEME } from "../theme/global";
import { View } from "react-native";
import StackRoute from "./stackRoutes/stack.routes";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = THEME.COLORS.WHITE;

  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.WHITE }}>
      {/* {user.token  ? <AppRoutes/>: <AuthRoutes />} */}

      <StackRoute />
    </View>
  );
}
