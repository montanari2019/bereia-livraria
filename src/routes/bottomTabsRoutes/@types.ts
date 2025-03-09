import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type AuthRoutesBottomTabProps = {
  home: undefined;
  carrinho: undefined;
  perfil: undefined;
};
export type AuthBottomNavigatorRoutesPrivadeProps =
  BottomTabNavigationProp<AuthRoutesBottomTabProps>;
