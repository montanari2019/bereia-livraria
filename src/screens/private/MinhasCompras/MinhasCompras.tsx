import { HeaderProfilePages } from "@/src/components/headerProfilePages/headerProfilePages";
import { MinhasComprasItem } from "@/src/components/minhasComprasItem/minhasComprasItem";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import {
  formatarDataBrasileira,
  formatarDataCompletaBrasileira,
  formatarParaReais,
} from "@/src/utils/formate.ultis";
import { livrosProd } from "@/src/utils/objects.utils";
import { ScrollView, Text, View } from "react-native";
import { styled } from "./styled";
import { FlatList } from "react-native-gesture-handler";
import { THEME } from "@/src/theme/global";
import { MinhasComprasItemProps } from "@/src/components/minhasComprasItem/interface/interface";

export default function MinhasCompras() {
  const newArray = Array.from({ length: 3 }, () => {
    return {
      id: Math.random().toString(36),
      image: livrosProd[2].img,
      status: "Devolvido",
      dataEntrega: new Date(),
      dataPrevistaDevolucao: new Date(),
    };
  });
  const arrayItemNumber = Array.from({ length: 5 }, () => {
    return {
      id: Math.random().toString(36),
      image: livrosProd[0].img,
      status: "Devolvido",
      dataEntrega: new Date(),
      dataPrevistaDevolucao: new Date(),
    };
  });
  0;
  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.PROFILE_STACK_PRIVATE}>
      <HeaderProfilePages titlePage="Minhas Compras" />

      <View style={styled.sectionContainer}>
        <FlatList
          bounces={false}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          data={arrayItemNumber}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: THEME.SIZES.SIZE_XS_16,
            padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
          }}
          renderItem={({ item }) => (
            <View style={styled.cardContainer}>
              <Text style={styled.dateText}>
                {formatarDataCompletaBrasileira(new Date(), "America/Manaus")}
              </Text>

              <View style={styled.containerItens}>
                {newArray.map((index) => {
                  return (
                    <MinhasComprasItem
                      key={index.id}
                      dataEntrega={new Date()}
                      dataPrevistaDevolucao={new Date()}
                      status="Entregue"
                      imageUrl={livrosProd[1].img}
                    />
                  );
                })}
              </View>

              <Text style={styled.totalizerText}>
                Total: {formatarParaReais(98.52)}
              </Text>
            </View>
          )}
        />
      </View>
    </PanGestureHandlerGoBack>
  );
}
