import { Text, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import { HeaderProfile } from "@/src/components/headerProfile/headerProfile";
import AntDesign from "@expo/vector-icons/AntDesign";
import { THEME } from "@/src/theme/global";
import { useNavigation } from "@react-navigation/native";
import {
  ProfileStackRoutesNavigatorPrivateProps,
  ProfileStackRoutesTypeProps,
} from "@/src/routes/privateStackRoutes/profileStackRoutes/@types";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";

export default function Profile() {
  const navigator = useNavigation<ProfileStackRoutesNavigatorPrivateProps>();

  function handleRedirect(value: keyof ProfileStackRoutesTypeProps) {
    navigator.navigate(value);
  }
  return (
    <View style={styled.container}>
      <HeaderProfile />

      <View style={styled.section}>
        <TouchableOpacity
          style={styled.sectionButton}
          onPress={() => handleRedirect("minhasComprasStack")}
        >
          <AntDesign name="tags" size={24} color={THEME.COLORS.GRAY_500} />
          <Text style={styled.sectionButtonText}>Minhas Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styled.sectionButton}
          onPress={() => handleRedirect("meusEnderecosStack")}
        >
          <AntDesign name="dingding" size={24} color={THEME.COLORS.GRAY_500} />
          <Text style={styled.sectionButtonText}>Meus Enderecos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styled.sectionButton}
          onPress={() => handleRedirect("minhasAssinaturasStack")}
        >
          <AntDesign name="star" size={24} color={THEME.COLORS.GRAY_500} />
          <Text style={styled.sectionButtonText}>Minhas Assinaturas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
