import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackRoutesTypeProps = {
  loginHome: undefined;
  signIn: undefined;
  signUp: undefined;
};

export type StackRoutesNavigatorPublicProps =
  NativeStackNavigationProp<StackRoutesTypeProps>;
