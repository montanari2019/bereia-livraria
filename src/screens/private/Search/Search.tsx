import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { THEME } from "@/src/theme/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import { Separator } from "@/src/components/separator/separator";
import { FlatList } from "react-native-gesture-handler";
import { recentSearch } from "@/src/utils/objects.utils";
import { useState } from "react";
export default function Search() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();
  const [searchItem, setSearchItem] = useState("");
  const disableSearch = searchItem === "";
  function handleGoBack() {
    navigator.goBack();
  }

  function handleSetInputRecentSearch(value: string) {
    setSearchItem(value);
  }
  return (
    <View style={styled.container}>
      <View style={styled.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="left" size={30} color={THEME.COLORS.BEREIA_YELLOW} />
        </TouchableOpacity>
        <View style={styled.searchInput}>
          <AntDesign name="search1" size={24} color={THEME.COLORS.GRAY_300} />
          <TextInput
            value={searchItem}
            onChangeText={(e) => setSearchItem(e)}
            style={styled.inputSearch}
            placeholderTextColor={THEME.COLORS.GRAY_300}
            placeholder="O que você gostaria de ler ?"
          />

          <TouchableOpacity
            style={disableSearch ? { display: "none" } : { display: "flex" }}
            onPress={() => handleSetInputRecentSearch("")}
          >
            <AntDesign name="close" size={25} color={THEME.COLORS.DANGER_500} />
          </TouchableOpacity>
        </View>
      </View>
      <Separator />

      <View>
        <FlatList
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
    </View>
  );
}
