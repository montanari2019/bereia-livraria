import { THEME } from "@/src/theme/global";
import { Text, View } from "react-native";
import { ParagraphComponent } from "../paragraphTitle/paragraphTitle";

export function NotFoundComponent() {
  return (
    <View style={{ paddingVertical: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24 }}>
      <ParagraphComponent
        title="Não há nada a exibir ainda"
        style={{
          fontSize: THEME.SIZES.SIZE_XSS_14,
          color: THEME.COLORS.GRAY_300,
          fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
          textAlign: "center",
        }}
      />
    </View>
  );
}
