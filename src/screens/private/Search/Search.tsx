import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { THEME } from "@/src/theme/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { styled } from "./styled";
import { Separator } from "@/src/components/separator/separator";
import { livrosProd, recentSearch } from "@/src/utils/objects.utils";
import { useState } from "react";
import { ItemSearch } from "@/src/components/itemSearch/itemSearch";
import { NotFoundComponent } from "@/src/components/notFoud/NotFoud";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormData, SearchSchema } from "./schema/search.schema";

export default function Search() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();
  const [produtosFilter, setProdutosFilter] = useState<any[]>([]);
  const [submitEdit, setSubmitEdit] = useState(false);

  const { handleSubmit, reset, setValue, control, watch } =
    useForm<SearchFormData>({
      resolver: zodResolver(SearchSchema),
      defaultValues: {
        searchItem: "",
      },
    });

  function handleSubmitForm(form: SearchFormData) {
    if (!form.searchItem.trim()) return; // Evita buscar por strings vazias
    setSubmitEdit(true);
    const filter = livrosProd.filter((e) =>
      e.titulo.toLowerCase().includes(form.searchItem.toLowerCase())
    );
    setProdutosFilter(filter);
  }

  function handleNavigationItem(id: string) {
    navigator.navigate("itemStack", { id });
  }

  function handleGoBack() {
    navigator.goBack();
  }

  function handleSetInputRecentSearch(value: string) {
    setValue("searchItem", value);
    handleSubmit(handleSubmitForm)();
  }

  function handleCleanSearch() {
    reset();
    setProdutosFilter([]);
    setSubmitEdit(false);
  }

  return (
    <View style={styled.container}>
      <View style={styled.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="left" size={23} color={THEME.COLORS.BEREIA_YELLOW} />
        </TouchableOpacity>
        <View style={styled.searchInput}>
          <AntDesign name="search1" size={24} color={THEME.COLORS.GRAY_300} />

          <Controller
            control={control}
            name="searchItem"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="O que você gostaria de ler?"
                keyboardAppearance="default"
                keyboardType="default"
                value={value}
                onChangeText={onChange}
                style={styled.inputSearch}
                onSubmitEditing={handleSubmit(handleSubmitForm)}
              />
            )}
          />

          {watch("searchItem").length > 0 && (
            <TouchableOpacity onPress={handleCleanSearch}>
              <AntDesign
                name="close"
                size={25}
                color={THEME.COLORS.DANGER_500}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Separator />

      {submitEdit ? (
        <View style={styled.displayFlatList}>
          <FlatList
            bounces={false}
            overScrollMode="never"
            data={produtosFilter}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styled.listContainer}
            ListEmptyComponent={<NotFoundComponent />}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleNavigationItem(item.id)}>
                <ItemSearch
                  autor={item.autor}
                  disponing={item.disponing}
                  imgUrl={item.img}
                  titulo={item.titulo}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <View style={styled.displayFlatList}>
          <FlatList
            bounces={false}
            overScrollMode="never"
            data={recentSearch}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styled.listContainer}
            renderItem={({ item }) => (
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
            )}
          />
        </View>
      )}
    </View>
  );
}
