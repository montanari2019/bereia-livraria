import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { THEME } from "@/src/theme/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { styled } from "./styled";
import { Separator } from "@/src/components/separator/separator";
import { livrosProd, recentSearch } from "@/src/utils/objects.utils";
import { useEffect, useState } from "react";
import { ParagraphComponent } from "@/src/components/paragraphTitle/paragraphTitle";
import { ItemSearch } from "@/src/components/itemSearch/itemSearch";
import { NotFoundComponent } from "@/src/components/notFoud/NotFoud";

export default function Search() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();
  const [searchItem, setSearchItem] = useState("");
  const [produtosFilter, SetProdutosFilter] = useState(livrosProd);
  const [submitEdit, setSubmitEdit] = useState(false);
  const disableSearch = searchItem === "";

  function handleNavigationItem(id: string) {
    navigator.navigate("itemStack", { id });
    // Add your navigation logic here
  }

  function handleGoBack() {
    navigator.goBack();
  }

  function handleSetInputRecentSearch(value: string) {
    setSearchItem(value);
    setSubmitEdit(true);
  }

  function handleCleanSearch() {
    setSearchItem("");
    setSubmitEdit(false);
  }

  function filterNomeProdutos() {
    const filter = livrosProd.filter((e) =>
      e.titulo.toLowerCase().includes(searchItem.toLowerCase())
    );

    SetProdutosFilter(filter);
  }

  useEffect(() => {
    if (submitEdit) {
      filterNomeProdutos();
    }
  }, [submitEdit]);

  useEffect(() => {
    handleCleanSearch();
  }, []);

  return (
    <View style={styled.container}>
      <View style={styled.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="left" size={23} color={THEME.COLORS.BEREIA_YELLOW} />
        </TouchableOpacity>
        <View style={styled.searchInput}>
          <AntDesign name="search1" size={24} color={THEME.COLORS.GRAY_300} />
          <TextInput
            value={searchItem}
            onChangeText={(e) => setSearchItem(e)}
            style={styled.inputSearch}
            placeholderTextColor={THEME.COLORS.GRAY_300}
            placeholder="O que você gostaria de ler ?"
            onSubmitEditing={() => setSubmitEdit(true)}
          />
          <TouchableOpacity
            style={disableSearch ? { display: "none" } : { display: "flex" }}
            onPress={handleCleanSearch}
          >
            <AntDesign name="close" size={25} color={THEME.COLORS.DANGER_500} />
          </TouchableOpacity>
        </View>
      </View>
      <Separator />

      {submitEdit === false ? (
        <View style={styled.displayFlatList}>
          <FlatList
            bounces={false}
            overScrollMode="never"
            data={recentSearch}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styled.listContainer}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styled.buttonRecentSearch}
                  onPress={() => handleSetInputRecentSearch(item.nome)}
                >
                  <AntDesign
                    name="clockcircleo"
                    size={24}
                    color={THEME.COLORS.GRAY_300}
                  />
                  <Text style={styled.textRecentSearch}>{item.nome}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <View style={styled.displayFlatList}>
          <FlatList
            bounces={false}
            overScrollMode="never"
            data={produtosFilter}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styled.listContainer}
            ListEmptyComponent={<NotFoundComponent />}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => handleNavigationItem(item.id)}>
                  <ItemSearch
                    autor={item.autor}
                    disponing={item.disponing}
                    imgUrl={item.img}
                    titulo={item.titulo}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
}
