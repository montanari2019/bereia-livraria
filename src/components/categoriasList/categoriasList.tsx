import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { THEME } from "@/src/theme/global";
import { categoriasComUrl } from "@/src/utils/objects.utils";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { ParagraphComponent } from "../paragraphTitle/paragraphTitle";
import { styled } from "./styled";

export function CategoriasList() {
  const [selectItem, setSelected] = useState<string | null>();
  return (
    <View style={styled.contianerCategoria}>
      <View style={styled.containerButtonAndParagraph}>
        <ParagraphComponent
          title="Categorias"
          style={{
            fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            color: THEME.COLORS.GRAY_300,
          }}
        />
        <TouchableOpacity
          style={selectItem ? { display: "flex" } : { display: "none" }}
          onPress={() => setSelected(null)}
        >
          <MaterialCommunityIcons
            name="window-close"
            size={24}
            color={THEME.COLORS.DANGER_500}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={categoriasComUrl}
        keyExtractor={(item) => item.nome_categoria}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styled.categoriaItemContainer}
            onPress={() => setSelected(item.nome_categoria)}
          >
            <Image
              source={{ uri: item.image_url }}
              style={styled.imagemCategory}
            />
            <Text
              style={
                selectItem !== item.nome_categoria
                  ? styled.itemCategoryText
                  : styled.itemCategoryTextSelect
              }
            >
              {item.nome_categoria}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styled.emptyListText}>
            Nenhuma categoria cadastrada.
          </Text>
        )}
        contentContainerStyle={{
          gap: 25,
          paddingLeft: 5,
        }}
      />
    </View>
  );
}
