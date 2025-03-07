import { Text, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import AntDesign from "@expo/vector-icons/AntDesign";
import { THEME } from "@/src/theme/global";
import { useNavigation } from "@react-navigation/native";
import { ProfileStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/profileStackRoutes/@types";

export function HeaderProfile() {
  const navigator = useNavigation<ProfileStackRoutesNavigatorPrivateProps>();

  function handleNavigateToProfileDetails() {
    navigator.navigate("meuPerfilStack");
  }
  return (
    <View style={styled.container}>
      <View style={styled.elipseName}>
        <Text style={styled.elipseNameText}>IM</Text>
      </View>
      <View>
        <Text style={styled.textItemName}>Ikaro Montanari</Text>

        <TouchableOpacity
          style={styled.textDisplayItens}
          onPress={handleNavigateToProfileDetails}
        >
          <Text style={styled.textItem}>Meu perfil</Text>
          <AntDesign name="right" size={20} color={THEME.COLORS.GRAY_100} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
