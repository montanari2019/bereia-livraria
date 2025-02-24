import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { Image, Text, View } from "react-native";
import ImageLupa from "../../../assets/images/lupa.png";
import { styled } from "./styled";
import { FormsSingUp } from "@/src/components/formsSingUp/formSingUp";

export default function SingUp() {
  return (
    <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.LOGIN_HOME_PUBLIC}>
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
