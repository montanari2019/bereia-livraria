import { HeaderPublic } from "@/src/components/headerPublic/HeaderPublic";
import { StackRoutesNavigatorPublicProps } from "@/src/routes/stackRoutes/@types";
import { THEME } from "@/src/theme/global";
import { useNavigation } from "@react-navigation/native";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import { Footer } from "@/src/components/footer/footer";

export default function LoginHome() {
  const navigator = useNavigation<StackRoutesNavigatorPublicProps>();

  function handleNavigateSingUp() {
    navigator.navigate("signUp");
  }

  function handleNavigateSingIn() {
    navigator.navigate("signIn");
  }

  return (
    <>
      <View style={styled.container}>
        <HeaderPublic />

        <View style={styled.buttonDisplay}>
          <TouchableOpacity
            style={styled.buttonLogin}
            onPress={handleNavigateSingIn}
          >
            <Text style={styled.textButton}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styled.buttonCreatAcount}
            onPress={handleNavigateSingUp}
          >
            <Text style={styled.textButton}>Criar Conta</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </View>
    </>
  );
}
