import { THEME } from "@/src/theme/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Alert, TouchableOpacity, View } from "react-native";
import { ParagraphComponent } from "../paragraphTitle/paragraphTitle";
import { CardEnderecoProps } from "./interface/cardEndereco.interface";
import { styled } from "./styled";
import { useNavigation } from "@react-navigation/native";
import {
  ProfileStackRoutesNavigatorPrivateProps,
  ProfileStackRoutesTypeProps,
} from "@/src/routes/privateStackRoutes/profileStackRoutes/@types";

export function CardEndereco(props: CardEnderecoProps) {
  const navigator = useNavigation<ProfileStackRoutesNavigatorPrivateProps>();

  function handleRedirect(value: keyof ProfileStackRoutesTypeProps) {
    navigator.navigate(value);
  }
  function StyleLabel() {
    if (props.endereco_principal) {
      return {
        label: "Endereço Principal",
        style: {
          color: THEME.COLORS.SUCESS_500,
          fontSize: THEME.SIZES.SIZE_XS_16,
          fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
        },
      };
    } else {
      return {
        label: "Tornar Endereço Principal",
        style: {
          color: THEME.COLORS.BEREIA_YELLOW,
          fontSize: THEME.SIZES.SIZE_XS_16,
          fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
        },
      };
    }
  }

  function handleDeleteItem() {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja excluir este item?",
      [
        {
          text: "Não",
          onPress: () => console.log("Exclusão cancelada"),
          style: "cancel", // Deixa o botão com um estilo diferente
        },
        {
          text: "Sim",
          onPress: () => console.log("Item excluído!"),
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styled.container}>
      <View style={{ paddingBottom: 16 }}>
        <ParagraphComponent
          title={props.title}
          style={{
            color: THEME.COLORS.GRAY_500,
            fontSize: THEME.SIZES.SIZE_SM_18,
            fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
          }}
        />
        <TouchableOpacity disabled={props.endereco_principal}>
          <ParagraphComponent
            title={StyleLabel().label}
            style={StyleLabel().style}
          />
        </TouchableOpacity>
      </View>

      <View style={{ ...styled.contaierDisplay }}>
        <View style={styled.contaierDisplayText}>
          <ParagraphComponent
            title={`Endereço: ${props.endereco} `}
            style={{
              color: THEME.COLORS.GRAY_500,
              fontSize: THEME.SIZES.SIZE_XSS_14,
              fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            }}
          />
          <ParagraphComponent
            title={`Número: ${props.numero} `}
            style={{
              color: THEME.COLORS.GRAY_500,
              fontSize: THEME.SIZES.SIZE_XSS_14,
              fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            }}
          />
          <ParagraphComponent
            style={{
              color: THEME.COLORS.GRAY_500,
              fontSize: THEME.SIZES.SIZE_XSS_14,
              fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            }}
            title={`CEP: ${props.cep} `}
          />
          <ParagraphComponent
            style={{
              color: THEME.COLORS.GRAY_500,
              fontSize: THEME.SIZES.SIZE_XSS_14,
              fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            }}
            title={`Cidade/UF: ${props.cidade_uf} `}
          />
          <ParagraphComponent
            style={{
              color: THEME.COLORS.GRAY_500,
              fontSize: THEME.SIZES.SIZE_XSS_14,
              fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
            }}
            numberOfLines={2}
            title={`Coimplemento: ${props.complemento} `}
          />
        </View>

        <View style={styled.contaierDisplayButton}>
          <TouchableOpacity
            onPress={() => handleRedirect("alterarEnderecoStack")}
            style={{
              ...styled.button,
              backgroundColor: THEME.COLORS.BEREIA_YELLOW,
            }}
          >
            <AntDesign name="edit" size={24} color={THEME.COLORS.WHITE} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleDeleteItem}
            style={{
              ...styled.button,
              backgroundColor: THEME.COLORS.DANGER_500,
            }}
          >
            <AntDesign name="delete" size={24} color={THEME.COLORS.WHITE} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
