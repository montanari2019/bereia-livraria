import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";
import { HeaderProfilePages } from "@/src/components/headerProfilePages/headerProfilePages";
import { THEME } from "@/src/theme/global";
import { ScrollView, View } from "react-native";
import { styled } from "./styled";
import { FormsUpdateEndereco } from "@/src/components/formsUpdateEndereco/formsUpdateEndereco";
import { ParagraphComponent } from "@/src/components/paragraphTitle/paragraphTitle";

export default function UpdateEndereco() {
  return (
    <>
      <HeaderProfilePages titlePage="Meus Enderecos" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styled.container}>
          <ParagraphComponent
            title="Alterar Endereço"
            style={{
              color: THEME.COLORS.BEREIA_YELLOW,
              paddingVertical: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
              fontSize: THEME.SIZES.SIZE_SM_18,
              fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
              textAlign: "center",
            }}
          />
          <FormsUpdateEndereco />
        </View>
      </ScrollView>
    </>
  );
}
