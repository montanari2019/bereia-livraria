import { HeaderProfile } from "@/src/components/headerProfile/headerProfile";
import { HeaderProfilePages } from "@/src/components/headerProfilePages/headerProfilePages";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { Text, View } from "react-native";
import { styled } from "./styled";
import { CardRadius } from "@/src/components/cardRadius/cardRadius";
import { ParagraphComponent } from "@/src/components/paragraphTitle/paragraphTitle";
import { THEME } from "@/src/theme/global";
import { formatarCPF, formatarTelefone } from "@/src/utils/mascara.utils";
import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";

export function ProfileDetails() {
  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.PROFILE_STACK_PRIVATE}>
      <HeaderProfilePages titlePage="Meu Perfil" />
      <View style={styled.contianer}>
        <CardRadius height={250}>
          <View style={styled.contianerSection}>
            <ParagraphComponent title="Dados Pessoais" />

            <View style={styled.bodyTextSection}>
              <ParagraphComponent
                fontSize={THEME.SIZES.SIZE_XSS_14}
                fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
                title={`Nome: Ikaro Bruno da Mata Monatanari`}
              />
              <ParagraphComponent
                fontSize={THEME.SIZES.SIZE_XSS_14}
                fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
                title={`Email: ikaro@gmail.com`}
              />
              <ParagraphComponent
                fontSize={THEME.SIZES.SIZE_XSS_14}
                fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
                title={`Telefone: ${formatarTelefone("69993569547")}`}
              />
              <ParagraphComponent
                fontSize={THEME.SIZES.SIZE_XSS_14}
                fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
                title={`CPF: ${formatarCPF("00887957218")}`}
              />
            </View>
          </View>
        </CardRadius>
        <ButtonComponent
          bgColor={THEME.COLORS.DANGER_500}
          title="Deletar Conta"
        />
      </View>
    </PanGestureHandlerGoBack>
  );
}
