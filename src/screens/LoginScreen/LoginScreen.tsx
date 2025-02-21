import { Image, StatusBar, Text, View } from "react-native";
import { styled } from "./styled";
import LupaImage from "../../assets/images/lupa.png";
import LogoBereia from "../../assets/images/logo_tela_login.png";
import { THEME } from "@/src/theme/global";

export default function Login() {
  return (
    <>
      <StatusBar
        backgroundColor={THEME.COLORS.GRAY_600}
        barStyle={"light-content"}
        translucent={true}
      />
      <View style={styled.container}>
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
      </View>
    </>
  );
}
