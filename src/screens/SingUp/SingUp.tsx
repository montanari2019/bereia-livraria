import { FormsSingUp } from "@/src/components/formsSingUp/formSingUp";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { StackRoutesNavigatorPublicProps } from "@/src/routes/stackRoutes/@types";
import { useNavigation } from "expo-router";
import { Image, Text, View } from "react-native";
import ImageLupa from "../../assets/images/lupa.png";
import { styled } from "./styled";

export default function SingUp() {
  const navigator = useNavigation<StackRoutesNavigatorPublicProps>();
  return (
    <PanGestureHandlerGoBack route="loginHome">
      <View style={styled.container}>
        <View style={styled.containerHeader}>
          <View style={styled.lupaContent}>
            <Image source={ImageLupa} style={styled.imagemLupa} />
          </View>
          <View style={styled.containerTextHeader}>
            <Text style={styled.textTop}>Você é novo por aqui ?</Text>
            <Text style={styled.textBottom}>Cadastre-se, é grátis</Text>
          </View>
        </View>

        <View style={styled.containerForm}>
          <FormsSingUp />
        </View>
      </View>
    </PanGestureHandlerGoBack>
  );
}
