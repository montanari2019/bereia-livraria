import { CardEndereco } from "@/src/components/cardEndereco/cardEndereco";
import { HeaderProfilePages } from "@/src/components/headerProfilePages/headerProfilePages";
import { THEME } from "@/src/theme/global";
import { enderecosStatic } from "@/src/utils/objects.utils";
import { FlatList, View } from "react-native";
import { styled } from "./styled";
import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";
import { useNavigation } from "@react-navigation/native";
import {
  ProfileStackRoutesNavigatorPrivateProps,
  ProfileStackRoutesTypeProps,
} from "@/src/routes/privateStackRoutes/profileStackRoutes/@types";

export function MeusEnderecos() {
  const navigator = useNavigation<ProfileStackRoutesNavigatorPrivateProps>();

  function handleRedirect(value: keyof ProfileStackRoutesTypeProps) {
    navigator.navigate(value);
  }
  return (
    <View style={styled.sectionContainer}>
      <HeaderProfilePages titlePage="Meus Enderecos" />

      <View style={styled.containerButton}>
        <ButtonComponent
          onPress={() => handleRedirect("cadastrarEnderecoStack")}
          bgColor={THEME.COLORS.WHITE}
          textColor={THEME.COLORS.SUCESS_500}
          title="Cadastrar novo Endereco"
        />
      </View>
      <FlatList
        bounces={false}
        overScrollMode="never"
        data={enderecosStatic}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: 20,
          padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
        }}
        renderItem={({ item }) => {
          return (
            <CardEndereco
              title={item.title}
              endereco_principal={item.endereco_principal}
              endereco={item.endereco}
              numero={item.numero}
              cep={item.cep}
              cidade_uf={item.cidade_uf}
              complemento={item.complemento}
              id={item.id}
            />
          );
        }}
      />
    </View>
  );
}
