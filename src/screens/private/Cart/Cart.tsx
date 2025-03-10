import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { THEME } from "@/src/theme/global";
import { Separator } from "@/src/components/separator/separator";
import { livrosProd } from "@/src/utils/objects.utils";
import { formatarParaReais } from "@/src/utils/formate.ultis";
import { CartItem } from "@/src/components/cartItem/CartItem";
import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";
import { CartStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/cartStackRoutes/@types";
import { useNavigation } from "@react-navigation/native";
import { PickerComponent } from "@/src/components/pickerComponent/PickerComponent";
import useCartContext from "@/src/context/cartContext/useCartContext";
import { NotFoundComponent } from "@/src/components/notFoud/NotFoud";

export default function Cart() {
  const navigator = useNavigation<CartStackRoutesNavigatorPrivateProps>();

  const { cartItens, totalizerCart } = useCartContext();

  function handleNavigationPayment() {
    navigator.navigate("paymentStack");
    // Add your navigation logic here
  }

  return (
    <View style={styled.container}>
      <View style={styled.header}>
        <Text style={styled.enderecoHeaderText}>Endereço de entrega:</Text>

        <PickerComponent />

        {/* <View style={styled.enderecoHeaderContainer}>
          <MaterialIcons
            name="location-on"
            size={24}
            color={THEME.COLORS.GRAY_300}
          />
          <Text style={styled.enderecoHeaderTextBody} numberOfLines={1}>
            Avenida Capitão Castro - Vilhena
          </Text>
          <TouchableOpacity>
            <AntDesign name="right" size={24} color={THEME.COLORS.GRAY_300} />
          </TouchableOpacity>
        </View> */}
      </View>
      <Separator />

      <FlatList
        bounces={false}
        overScrollMode="never"
        data={cartItens}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<NotFoundComponent />}
        contentContainerStyle={{
          gap: THEME.SIZES.SIZE_XS_16,
          padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
        }}
        renderItem={({ item }) => (
          <CartItem
            key={item.id}
            id={item.id}
            imageUrl={item.img}
            price={item.preco}
            title={item.titulo}
          />
        )}
      />

      <View style={styled.totalizerContainer}>
        <Text style={styled.totalText}>
          Total: {formatarParaReais(totalizerCart())}
        </Text>

        <ButtonComponent
          disabled={totalizerCart() === 0}
          onPress={handleNavigationPayment}
          bgColor={THEME.COLORS.BEREIA_YELLOW}
          title="Ir Para o Pagamento"
        />
      </View>
    </View>
  );
}
