import { FormsCreateEndereco } from "@/src/components/formsCreateEndereco/formCreateEndereco";
import { HeaderProfilePages } from "@/src/components/headerProfilePages/headerProfilePages";
import { ParagraphComponent } from "@/src/components/paragraphTitle/paragraphTitle";
import { THEME } from "@/src/theme/global";
import { ScrollView, View } from "react-native";
import { styled } from "./styled";

export default function CreateEndereco() {
  return (
    <>
      <HeaderProfilePages titlePage="Meus Enderecos" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styled.container}>
          <ParagraphComponent
            title="Cadastrar Endereço"
            style={{
              color: THEME.COLORS.SUCESS_500,
              paddingVertical: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
              fontSize: THEME.SIZES.SIZE_SM_18,
              fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
              textAlign: "center",
            }}
          />
          <FormsCreateEndereco />
        </View>
      </ScrollView>
    </>
  );
}
