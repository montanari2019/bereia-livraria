import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type CartStackRoutesTypeProps = {
  carrinhoStack: undefined;
  paymentStack: undefined;
  //   item: {id:string};
};

export type CartStackRoutesNavigatorPrivateProps =
  NativeStackNavigationProp<CartStackRoutesTypeProps>;
