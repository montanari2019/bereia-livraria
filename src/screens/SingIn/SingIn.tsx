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
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          <TouchableOpacity style={styled.buttonForgoutPassword}>
            <Text style={styled.textForgoutPassword}>Esqueceu sua senha ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styled.buttonLogin}
            // onPress={handleNavigateSingIn}
          >
            <Text style={styled.textButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
