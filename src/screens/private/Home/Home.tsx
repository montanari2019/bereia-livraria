import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styled } from "./styled";
import { THEME } from "@/src/theme/global";
import { InputSearch } from "@/src/components/inputSearch/inputSearch";
import { Separator } from "@/src/components/separator/separator";
import { ParagraphTitle } from "@/src/components/paragraphTitle/paragraphTitle";
import { CategoriasList } from "@/src/components/categoriasList/categoriasList";
import { ItemHome } from "@/src/components/itemHome/itemHome";
import { livrosProd } from "@/src/utils/objects.utils";

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
