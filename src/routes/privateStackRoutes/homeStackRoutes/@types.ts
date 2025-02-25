import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackRoutesTypeProps = {
  homeStack: undefined;
  itemStack: { id: string };
};

export type HomeStackRoutesNavigatorPrivateProps =
  NativeStackNavigationProp<HomeStackRoutesTypeProps>;
