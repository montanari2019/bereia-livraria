import { HeaderProfilePages } from "@/src/components/headerProfilePages/headerProfilePages";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { ParagraphComponent } from "@/src/components/paragraphTitle/paragraphTitle";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { THEME } from "@/src/theme/global";
import { Text, View } from "react-native";
import { styled } from "./styled";

export function MinhasAssinaturas() {
  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.PROFILE_STACK_PRIVATE}>
      <HeaderProfilePages titlePage="Minhas Assinaturas" />
      <View style={styled.container}>
        <ParagraphComponent
          title="Ainda em Desenvolvimento"
          style={{
            color: THEME.COLORS.GRAY_400,
            paddingTop: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
            fontSize: THEME.SIZES.SIZE_SM_18,
            fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
            textAlign: "center",
          }}
        />
        <ParagraphComponent
          title="em breve ..."
          style={{
            color: THEME.COLORS.GRAY_300,
            fontSize: THEME.SIZES.SIZE_XSS_14,
            fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            textAlign: "center",
          }}
        />
      </View>
    </PanGestureHandlerGoBack>
  );
}
