import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";
import { InputComponent } from "@/src/components/inputComponent/inputComponents";
import { AuthBottomNavigatorRoutesPrivadeProps } from "@/src/routes/bottomTabsRoutes/@types";
import { THEME } from "@/src/theme/global";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { styled } from "./styled";
import { CartStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/cartStackRoutes/@types";
import { useFocusEffect } from "expo-router";

export default function Payment() {
  const navigatorBottom =
    useNavigation<AuthBottomNavigatorRoutesPrivadeProps>();
  const navigatorStackCart =
    useNavigation<CartStackRoutesNavigatorPrivateProps>();

  useFocusEffect(() => {
    setTimeout(() => {
      navigatorStackCart.navigate("paymentSucess");
    }, 5000);
  });

  function alertCancelarVenda() {
    Alert.alert("Cancelar Compra", "Você quer mesmo cancelar sua compra?", [
      {
        text: "Não",
        onPress: () => console.log("Cancelamento cancelado."),
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          handleGoBackToHome();
          // Adicione o código para cancelar a compra aqui
        },
      },
    ]);
  }

  function handleGoBackToHome() {
    navigatorBottom.navigate("home");
    navigatorStackCart.reset({
      index: 0,
      routes: [{ name: "carrinhoStack" }],
    });
  }

  return (
    <View style={styled.container}>
      <Text style={styled.textHeader}>
        Voce está quase finalizando sua compra
      </Text>

      <View style={styled.containerQrCode}>
        <QRCode value={"montanarisoft.com"} size={208} />
      </View>

      <View style={styled.containerInput}>
        <Text style={styled.textInputLabel}>Pix copia e cola</Text>
        <InputComponent
          readOnly={true}
          placeholder=""
          value="00020126330014BR.GOV.BCB.PIX0114seu@email.com520400005303986540510.005802BR5920Nome do Recebedor6008CIDADE62070503***6304A1B2
"
        />

        <Text style={styled.textIntrucion}>
          Você tem 5 dias para permanecer com os livros a partir da data de
          entrega, caso nao seja devolvido ou devolvido com avarias, será
          aplicado uma multa de R$350,00 ou o envio do cpf do comprador para os
          órgãos responsáveis.
        </Text>
      </View>

      <View>
        <ButtonComponent
          onPress={alertCancelarVenda}
          bgColor={THEME.COLORS.DANGER_500}
          title="Cancelar Compra"
        />
      </View>
    </View>
  );
}
