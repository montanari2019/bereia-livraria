import { Footer } from "@/src/components/footer/footer";
import { HeaderPublic } from "@/src/components/headerPublic/HeaderPublic";
import { InputComponent } from "@/src/components/inputComponent/inputComponents";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styled } from "./styled";
import { ShimmerLoading } from "@/src/components/shimmerLoading/shimmerLoading";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackRoutesNavigatorPublicProps } from "@/src/routes/stackRoutes/@types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotFormData, ForgotSchema } from "./models/forgotSchema.model";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";
import { THEME } from "@/src/theme/global";

export default function ForgotPassword() {
  const navigator = useNavigation<StackRoutesNavigatorPublicProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [concludedState, setConcludedState] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ForgotFormData>({
    resolver: zodResolver(ForgotSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleSubmitForm(form: ForgotFormData) {
    console.log(form);
    hasConcludedState();
  }

  function hasConcludedState() {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setConcludedState(true);
    }, 3000);
  }

  function handleNavigateSingIn() {
    navigator.navigate("signIn");
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.SIGN_IN_PUBLIC}>
        <View style={styled.container}>
          <HeaderPublic />

          <ShimmerLoading isLoading={isLoading}>
            {!concludedState ? (
              <View style={styled.containerBody}>
                <Text style={styled.textParagraph}>
                  Para resetar sua senha informe o e-mail cadastrado para seu
                  usuário.
                </Text>

                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value } }) => (
                    <InputComponent
                      placeholder="Email:"
                      keyboardAppearance="default"
                      keyboardType="email-address"
                      key={"inputemail"}
                      value={value}
                      errorMessage={errors.email?.message}
                      onChangeText={onChange}
                    />
                  )}
                />

                <ButtonComponent
                  bgColor={THEME.COLORS.BEREIA_YELLOW}
                  style={styled.buttonReset}
                  title="Resetar Senha"
                  onPress={handleSubmit(handleSubmitForm)}
                />
              </View>
            ) : (
              <View style={styled.containerBody}>
                <Text style={styled.textParagraphConcluded}>
                  Verifique seu e-mail, lá estará o passo a passo para resetar
                  sua senha.
                </Text>

                <ButtonComponent
                  bgColor={THEME.COLORS.BEREIA_YELLOW}
                  style={styled.buttonReset}
                  title="Voltar ao login"
                  onPress={handleNavigateSingIn}
                />
              </View>
            )}
          </ShimmerLoading>
        </View>
        <Footer />
      </PanGestureHandlerGoBack>
    </ScrollView>
  );
}
