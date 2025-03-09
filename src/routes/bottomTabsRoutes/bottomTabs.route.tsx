import { THEME } from "@/src/theme/global";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartStackRoutePrivate from "../privateStackRoutes/cartStackRoutes/cartStackRoutes";
import HomeStackRoutePrivate from "../privateStackRoutes/homeStackRoutes/homeStackRoutes";
import ProfileStackRoutePrivate from "../privateStackRoutes/profileStackRoutes/profileStackRoutes";
import { AuthRoutesBottomTabProps } from "./@types";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeStackRoutesNavigatorPrivateProps } from "../privateStackRoutes/homeStackRoutes/@types";

export default function BottomTabNavigationRoute() {
  const iconSize = THEME.SIZES.SIZE_LG_24;

  const { Navigator, Screen } =
    createBottomTabNavigator<AuthRoutesBottomTabProps>();

  return (
    <>
      <StatusBar
        backgroundColor={THEME.COLORS.BEREIA_BRONW}
        barStyle={"light-content"}
        translucent={true}
      />
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: THEME.COLORS.BEREIA_YELLOW,
          tabBarInactiveTintColor: THEME.COLORS.GRAY_300,
          tabBarLabelStyle: {
            marginTop: 5,
            textTransform: "capitalize",
            fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            fontSize: THEME.SIZES.SIZE_XXXS_12,
          },
          tabBarStyle: {
            backgroundColor: THEME.COLORS.GRAY_100,

            height: 70,
            paddingBottom: 25,
            paddingTop: 0,
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Screen
          name="home"
          component={HomeStackRoutePrivate}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home"
                size={iconSize}
                color={color}
              />
            ),
          }}
        />

        <Screen
          name="carrinho"
          component={CartStackRoutePrivate}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cart"
                size={iconSize}
                color={color}
              />
            ),
          }}
        />
        <Screen
          name="perfil"
          component={ProfileStackRoutePrivate}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account"
                size={iconSize}
                color={color}
              />
            ),
          }}
        />
      </Navigator>
    </>
  );
}
