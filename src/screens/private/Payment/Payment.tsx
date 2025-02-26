import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { Text, View } from "react-native";
import { styled } from "./styled";
import QRCode from "react-native-qrcode-svg";
import { InputComponent } from "@/src/components/inputComponent/inputComponents";
import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";
import { THEME } from "@/src/theme/global";

export default function Payment() {
  const pix = {
    version: "01",
    key: "seu@email.com", // Pode ser CPF, CNPJ, telefone ou e-mail
    name: "Seu Nome", // Nome do recebedor
    city: "Cidade", // Cidade do recebedor
    transactionId: "123456", // Código da transação (opcional)
    amount: 10.5, // Valor opcional
  };
  return (
    <View style={styled.container}>
      <Text style={styled.textHeader}>
        Voce está quase finalizando sua compra
      </Text>

      <View style={styled.containerQrCode}>
        <QRCode value={pix.key} size={208} />
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
          bgColor={THEME.COLORS.DANGER_500}
          title="Cancelar Compra"
        />
      </View>
    </View>
  );
}
