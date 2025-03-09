import SVGLogo from "@/src/assets/svg/Onlineshoppingorder.svg";
import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";
import { AuthBottomNavigatorRoutesPrivadeProps } from "@/src/routes/bottomTabsRoutes/@types";
import { CartStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/cartStackRoutes/@types";
import { THEME } from "@/src/theme/global";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { styled } from "./styled";
export default function PaymentSucess() {
  const navigatorBottom =
    useNavigation<AuthBottomNavigatorRoutesPrivadeProps>();
  const navigatorStackCart =
    useNavigation<CartStackRoutesNavigatorPrivateProps>();

  function handleGoBackToHome() {
    navigatorBottom.navigate("home");
    navigatorStackCart.reset({
      index: 0,
      routes: [{ name: "carrinhoStack" }],
    });
  }

  return (
    <View style={styled.container}>
      <Text style={styled.textHeader}>Compra finalizada com sucesso</Text>

      <SVGLogo width={260} height={260} />
      <View style={styled.containerInput}>
        <Text style={styled.textIntrucion}>
          O seu pedido ja está em produção de embalo, e se enviado ao seu
          endereço em breve.
        </Text>
      </View>

      <View style={{ width: "100%" }}>
        <ButtonComponent
          onPress={handleGoBackToHome}
          bgColor={THEME.COLORS.BEREIA_YELLOW}
          title="Voltar a Home"
        />
      </View>
    </View>
  );
}
