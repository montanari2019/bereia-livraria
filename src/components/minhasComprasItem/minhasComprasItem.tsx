import {
  formatarDataBrasileira,
  getLocalTimeZone,
} from "@/src/utils/formate.ultis";
import { Image, Text, View } from "react-native";
import { MinhasComprasItemProps } from "./interface/interface";
import { styled } from "./styled";
import { NotFoundComponent } from "../notFoud/NotFoud";

export function MinhasComprasItem({
  imageUrl,
  dataEntrega,
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

  return (
    <View style={styled.itemContainerDisplay}>
      <Image source={{ uri: imageUrl }} style={styled.imagemProd} />
      <View style={styled.detailsContainerDisplay}>
        <View>
          <Text numberOfLines={1} style={styled.nameProd}>
            Entregue
          </Text>
          <Text style={styled.priceProd}>
            Chegou dia {formatarDataBrasileira(new Date(dataEntrega), timeZone)}
          </Text>
        </View>
      </View>
    </View>
  );
}
