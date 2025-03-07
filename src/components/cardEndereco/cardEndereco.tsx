import { TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import { CardRadius } from "../cardRadius/cardRadius";
import { ParagraphComponent } from "../paragraphTitle/paragraphTitle";
import { THEME } from "@/src/theme/global";
import AntDesign from "@expo/vector-icons/AntDesign";

export function CardEndereco() {
  return (
    <CardRadius height={250}>
      <View style={styled.container}>
        <View style={styled.contaierDisplay}>
          <ParagraphComponent title="Casa 01" />
          <ParagraphComponent
            title="Endereço Principal"
            color={THEME.COLORS.SUCESS_500}
          />
        </View>

        <View style={styled.contaierDisplay}>
          <View style={styled.contaierDisplayText}>
            <ParagraphComponent
              fontSize={THEME.SIZES.SIZE_XSS_14}
              fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
              title="Endereço : Rua jk"
            />
            <ParagraphComponent
              fontSize={THEME.SIZES.SIZE_XSS_14}
              fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
              title="Numero: 534"
            />
            <ParagraphComponent
              fontSize={THEME.SIZES.SIZE_XSS_14}
              fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
              title="Cep: 76980-138"
            />
            <ParagraphComponent
              fontSize={THEME.SIZES.SIZE_XSS_14}
              fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
              title="Cidade/UF: Vilhena - RO "
            />
            <ParagraphComponent
              fontSize={THEME.SIZES.SIZE_XSS_14}
              fontFamily={THEME.FONT_FAMILY.FONT_POPPINS_400}
              title="Complemento: esquina tal"
            />
          </View>

          <View style={styled.contaierDisplayButton}>
            <TouchableOpacity
              style={{
                ...styled.button,
                backgroundColor: THEME.COLORS.BEREIA_YELLOW,
              }}
            >
              <AntDesign name="edit" size={24} color={THEME.COLORS.WHITE} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styled.button,
                backgroundColor: THEME.COLORS.DANGER_500,
              }}
            >
              <AntDesign name="edit" size={24} color={THEME.COLORS.WHITE} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CardRadius>
  );
}
