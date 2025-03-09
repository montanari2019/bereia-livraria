import { HeaderPublic } from "@/src/components/headerPublic/HeaderPublic";
import { StackRoutesNavigatorPublicProps } from "@/src/routes/stackRoutes/@types";
import { THEME } from "@/src/theme/global";
import { useNavigation } from "@react-navigation/native";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import { Footer } from "@/src/components/footer/footer";
import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";

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
          <ButtonComponent
            onPress={handleNavigateSingIn}
            bgColor={THEME.COLORS.BEREIA_YELLOW}
            title="Login"
          />

          <ButtonComponent
            onPress={handleNavigateSingUp}
            bgColor={THEME.COLORS.BEREIA_BRONW}
            title="Criar Conta"
          />
        </View>

        <Footer />
      </View>
    </>
  );
}
