import {
  formatarDataBrasileira,
  formatarDataCurtaBrasileira,
  getLocalTimeZone,
} from "@/src/utils/formate.ultis";
import { Image, Text, View } from "react-native";
import { MinhasComprasItemProps } from "./interface/interface";
import { styled } from "./styled";
import { NotFoundComponent } from "../notFoud/NotFoud";
import { THEME } from "@/src/theme/global";
import { ParagraphComponent } from "../paragraphTitle/paragraphTitle";
import { Separator } from "../separator/separator";

export function MinhasComprasItem({
  imageUrl,
  dataEntrega,
  dataPrevistaDevolucao,
  status,
}: MinhasComprasItemProps) {
  const location = getLocalTimeZone();
  const localTimezone = "America/Manaus";

  if (location === null) {
    return (
      <View>
        <NotFoundComponent />
      </View>
    );
  }

  const timeZone = location.timeZone ?? localTimezone;

  const colorStatusPedido = () => {
    switch (status) {
      case "Devolvido":
        return THEME.COLORS.PURPLE_500;
      case "Em preparação":
        return THEME.COLORS.BEREIA_YELLOW;
      case "Entregue":
        return THEME.COLORS.SUCESS_500;
      default:
        return THEME.COLORS.GRAY_300;
    }
  };

  const labelStatusPedido = () => {
    switch (status) {
      case "Devolvido":
        return {
          devolution: status,
          entrega: "Entregue",
        };
      case "Em preparação":
        return {
          devolution: "Devolução em",
          entrega: "Entrega em",
        };
      case "Entregue":
        return {
          devolution: "Devolução em",
          entrega: "Chegou dia",
        };
      default:
        return {
          devolution: "Sem status",
          entrega: "Sem status",
        };
    }
  };

  return (
    <View style={styled.itemContainerDisplay}>
      <Image source={{ uri: imageUrl }} style={styled.imagemProd} />
      <View style={styled.detailsContainerDisplay}>
        <View>
          <Text
            numberOfLines={1}
            style={{
              ...styled.nameProd,
              color: colorStatusPedido(),
            }}
          >
            {status}
          </Text>

          <View>
            <ParagraphComponent
              style={{
                fontSize: THEME.SIZES.SIZE_XSS_14,
                fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
                color: THEME.COLORS.GRAY_400,
              }}
              title={labelStatusPedido().entrega}
            />
            <ParagraphComponent
              style={{
                fontSize: THEME.SIZES.SIZE_XSS_14,
                fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
                color: THEME.COLORS.GRAY_300,
              }}
              title={formatarDataBrasileira(new Date(dataEntrega), timeZone)}
            />

            <Separator alignItems="flex-start" height={2} />

            <ParagraphComponent
              style={{
                fontSize: THEME.SIZES.SIZE_XSS_14,
                fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
                color: THEME.COLORS.GRAY_400,
              }}
              title={labelStatusPedido().devolution}
            />
            <ParagraphComponent
              style={{
                fontSize: THEME.SIZES.SIZE_XSS_14,
                fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
                color: THEME.COLORS.GRAY_300,
              }}
              title={formatarDataCurtaBrasileira(
                new Date(dataEntrega),
                timeZone
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
