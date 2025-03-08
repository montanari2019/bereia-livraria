import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProfileStackRoutesTypeProps = {
  profileStack: undefined;
  minhasComprasStack: undefined;
  minhasAssinaturasStack: undefined;
  meusEnderecosStack: undefined;
  meuPerfilStack: undefined;
  alterarEnderecoStack: undefined;
  cadastrarEnderecoStack: undefined;
  //   item: {id:string};
};

export type ProfileStackRoutesNavigatorPrivateProps =
  NativeStackNavigationProp<ProfileStackRoutesTypeProps>;
