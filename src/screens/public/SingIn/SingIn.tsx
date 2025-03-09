import { HeaderPublic } from "@/src/components/headerPublic/HeaderPublic";
import { InputComponent } from "@/src/components/inputComponent/inputComponents";
import { StackRoutesNavigatorPublicProps } from "@/src/routes/stackRoutes/@types";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { styled } from "./styled";
import { ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { CreateLoginSchema, LoginFormData } from "./models/loginShema.mode";
import { zodResolver } from "@hookform/resolvers/zod";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { Footer } from "@/src/components/footer/footer";
import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { ButtonComponent } from "@/src/components/buttomComponent/buttonComponent";
import { THEME } from "@/src/theme/global";

export default function SingIn() {
  const navigator = useNavigation<StackRoutesNavigatorPublicProps>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginFormData>({
    resolver: zodResolver(CreateLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSingInComponent({ email, password }: LoginFormData) {
    console.log({
      email,
      password,
    });
  }

  function redirectToForgotPassword() {
    navigator.navigate("forgot");
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <PanGestureHandlerGoBack route={ROUTES_STACK_ENUM.LOGIN_HOME_PUBLIC}>
        <View style={styled.container}>
          <HeaderPublic />

          <View style={styled.formsContainer}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <InputComponent
                  placeholder="Email"
                  keyboardAppearance="default"
                  keyboardType="email-address"
                  key={"inputemail"}
                  value={value}
                  errorMessage={errors.email?.message}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <InputComponent
                  placeholder="Senha"
                  keyboardAppearance="dark"
                  secureTextEntry
                  key={"inputSenha"}
                  value={value}
                  errorMessage={errors.password?.message}
                  onSubmitEditing={handleSubmit(handleSingInComponent)}
                  returnKeyType="send"
                  onChangeText={onChange}
                />
              )}
            />
            <TouchableOpacity
              style={styled.buttonForgoutPassword}
              onPress={redirectToForgotPassword}
            >
              <Text style={styled.textForgoutPassword}>
                Esqueceu sua senha ?
              </Text>
            </TouchableOpacity>

            <ButtonComponent
              onPress={handleSubmit(handleSingInComponent)}
              bgColor={THEME.COLORS.BEREIA_YELLOW}
              title="Login"
            />
          </View>
          <Footer />
        </View>
      </PanGestureHandlerGoBack>
    </ScrollView>
  );
}
