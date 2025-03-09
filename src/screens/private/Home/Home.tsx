import { CategoriasList } from "@/src/components/categoriasList/categoriasList";
import { InputSearch } from "@/src/components/inputSearch/inputSearch";
import { ItemHome } from "@/src/components/itemHome/itemHome";
import { Separator } from "@/src/components/separator/separator";
import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { THEME } from "@/src/theme/global";
import { livrosProd } from "@/src/utils/objects.utils";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";

export default function Home() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();

  function handleNavigationItem(id: string) {
    navigator.navigate("itemStack", { id });
    // Add your navigation logic here
  }

  const renderHeader = () => (
    <>
      <InputSearch />
      <Separator />
      <CategoriasList />
    </>
  );

  return (
    <View style={styled.container}>
      <FlatList
        data={livrosProd}
        keyExtractor={(item) => String(item.id)}
        numColumns={3}
        horizontal={false}
        bounces={false}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "space-between",
          width: "100%",
          gap: THEME.SIZES.SIZE_XXXS_12,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleNavigationItem(item.id)}
          >
            <ItemHome
              details={item.disponing ? "Disponível" : "Indiponível"}
              name={item.titulo}
              url={item.img}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
