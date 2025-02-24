import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackRoutesTypeProps = {
  loginHome: undefined;
  signIn: undefined;
  signUp: undefined;
  forgot: undefined;
};

export type StackRoutesNavigatorPublicProps =
  NativeStackNavigationProp<StackRoutesTypeProps>;
