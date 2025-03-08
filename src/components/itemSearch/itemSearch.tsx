import { Image, View } from "react-native";
import { styled } from "./styled";
import { livrosProd } from "@/src/utils/objects.utils";
import { THEME } from "@/src/theme/global";
import { ParagraphComponent } from "../paragraphTitle/paragraphTitle";
import { ItemSeacrhProps } from "./interface/itemSearch.interface";

export function ItemSearch({
  autor,
  disponing,
  imgUrl,
  titulo,
}: ItemSeacrhProps) {
  return (
    <View style={styled.displayTextItem}>
      <Image style={styled.itemImage} source={{ uri: imgUrl }} />
      <View>
        <ParagraphComponent
          numberOfLines={1}
          title={titulo}
          style={{
            fontSize: THEME.SIZES.SIZE_XS_16,
            fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
            color: THEME.COLORS.GRAY_500,
            textTransform: "capitalize",
          }}
        />

        <ParagraphComponent
          title={disponing ? "Disponível" : "Indisponível"}
          style={{
            fontSize: THEME.SIZES.SIZE_XSS_14,
            fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            color: livrosProd[0].disponing
              ? THEME.COLORS.SUCESS_500
              : THEME.COLORS.DANGER_500,
            textTransform: "capitalize",
          }}
        />

        <ParagraphComponent
          title={`Por: ${autor}`}
          style={{
            fontSize: THEME.SIZES.SIZE_XSS_14,
            fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            color: THEME.COLORS.GRAY_400,
            textTransform: "capitalize",
          }}
        />
      </View>
    </View>
  );
}
