import { THEME } from "@/src/theme/global";
import { formatarParaReais } from "@/src/utils/formate.ultis";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { CartItemProps } from "./interface/interface";
import { styled } from "./styled";
import useCartContext from "@/src/context/cartContext/useCartContext";

export function CartItem({ imageUrl, price, title, id }: CartItemProps) {
  const { removeItemCart } = useCartContext();
  function deleteItemCart(id: string) {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja excluir este item?",
      [
        {
          text: "Não",
          onPress: () => console.log("Exclusão cancelada"),
          style: "cancel", // Deixa o botão com um estilo diferente
        },
        {
          text: "Sim",
          onPress: () => removeItemCart(id),
        },
      ],
      { cancelable: false }
    );
  }
  return (
    <View style={styled.itemContainerDisplay}>
      <Image source={{ uri: imageUrl }} style={styled.imagemProd} />
      <View style={styled.detailsContainerDisplay}>
        <View>
          <Text numberOfLines={1} style={styled.nameProd}>
            {title}
          </Text>
          <Text style={styled.priceProd}>{formatarParaReais(price)}</Text>
        </View>

        <TouchableOpacity
          style={styled.removerLivro}
          onPress={() => deleteItemCart(id)}
        >
          <AntDesign name="delete" size={24} color={THEME.COLORS.WHITE} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
