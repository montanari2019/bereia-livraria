import { Image, Text, View } from "react-native";
import LogoBereia from "../../assets/images/logo_tela_login.png";
import LupaImage from "../../assets/images/lupa.png";
import { styled } from "./styled";
export function HeaderPublic() {
  return (
    <View style={styled.containerHeader}>
      <View style={styled.lupaContent}>
        <Image source={LupaImage} style={styled.imagemLupa} />
      </View>

      <View style={styled.displayContainer}>
        <Image source={LogoBereia} style={styled.imagemLogo} />
        <Text style={styled.textLogo}>
          Onde cada página abre um novo mundo.
        </Text>
      </View>
    </View>
  );
}
