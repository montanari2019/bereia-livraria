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

export default function Cart() {
  const navigator = useNavigation<CartStackRoutesNavigatorPrivateProps>();

  function handleNavigationPayment() {
    navigator.navigate("paymentStack");
    // Add your navigation logic here
  }

  const arrayItemNumber = Array.from({ length: 5 }, () => {
    return {
      id: Math.random().toString(36),
      title: livrosProd[0].titulo,
      image: livrosProd[0].img,
      price: livrosProd[0].preco,
    };
  });
  0;

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
        data={arrayItemNumber}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: THEME.SIZES.SIZE_XS_16,
          padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
        }}
        renderItem={({ item }) => (
          <CartItem
            key={item.id}
            id={item.id}
            imageUrl={item.image}
            price={item.price}
            title={item.title}
          />
        )}
      />

      <View style={styled.totalizerContainer}>
        <Text style={styled.totalText}>Total: {formatarParaReais(159.9)}</Text>

        <ButtonComponent
          onPress={handleNavigationPayment}
          bgColor={THEME.COLORS.BEREIA_YELLOW}
          title="Ir Para o Pagamento"
        />
      </View>
    </View>
  );
}
