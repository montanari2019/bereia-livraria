import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styled } from "./styled";
import { enderecosStatic } from "@/src/utils/objects.utils";
import { THEME } from "@/src/theme/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function PickerComponent() {
  const [selectedValue, setSelectedValue] = useState<string>("option1");
  const [enderecos, setEnderecos] = useState(enderecosStatic);

  return (
    <View style={styled.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styled.picker}
      >
        {enderecos.map((index) => {
          return (
            <Picker.Item
              key={index.id}
              style={styled.label}
              fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
              label={`${index.endereco} - ${index.cidade_uf}`}
              value={`${index.endereco} - ${index.cidade_uf}`}
            />
          );
        })}
      </Picker>
    </View>
  );
}
