import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ProdutoProps, RoutesParamsProps } from "./interface/interface";
import { livrosMap } from "@/src/utils/objects.utils";
import AntDesign from "@expo/vector-icons/AntDesign";
import { THEME } from "@/src/theme/global";
import { styled } from "./styled";
import { ScrollView } from "react-native-gesture-handler";
import { formatarParaReais, formatarTexto } from "@/src/utils/formate.ultis";

export default function ItemDetails() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();
  const route = useRoute();
  const { id } = route.params as RoutesParamsProps;

  const [produtoState, setProdutoState] = useState<ProdutoProps | null>();

  function handleGoBack() {
    navigator.goBack();
  }
  useFocusEffect(() => {
    const produto = livrosMap.get(id);
    if (produto) {
      setProdutoState(produto);
    } else {
      setProdutoState(null);
    }
  });

  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.HOME_STACK_PRIVATE}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
        overScrollMode="never"
      >
        <View style={styled.container}>
          <View style={styled.header}>
            <TouchableOpacity style={styled.iconStyle} onPress={handleGoBack}>
              <AntDesign name="left" size={20} color={THEME.COLORS.WHITE} />
            </TouchableOpacity>

            <View style={styled.headerIconsRigth}>
              <TouchableOpacity style={styled.iconStyle}>
                <AntDesign
                  name="sharealt"
                  size={20}
                  color={THEME.COLORS.WHITE}
                />
              </TouchableOpacity>
            </View>
          </View>

          {produtoState && (
            <>
              <View>
                <Image
                  style={styled.imagemProduto}
                  source={{ uri: produtoState.img }}
                />
              </View>

              <View style={styled.bodyItem}>
                <View style={styled.textTitleDisplay}>
                  <Text style={styled.nomeLivro}>{produtoState.titulo}</Text>
                  <Text style={styled.precoLivro}>
                    {formatarParaReais(produtoState.preco)}
                  </Text>
                </View>
                <Text style={styled.descricaoLivro}>
                  {formatarTexto(produtoState.sinopse)}
                </Text>

                <TouchableOpacity style={styled.botaoComprar}>
                  <Text style={styled.botaoComprarTexto}>
                    Adicionar ao Carrinho
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </PanGestureHandlerGoBack>
  );
}
