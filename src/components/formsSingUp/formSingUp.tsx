import { THEME } from "@/src/theme/global";
import { formatarCPF, formatarTelefone } from "@/src/utils/mascara.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { ButtonComponent } from "../buttomComponent/buttonComponent";
import { Footer } from "../footer/footer";
import { InputComponent } from "../inputComponent/inputComponents";
import {
  CreateAcountFormData,
  CreateAcountSchema,
} from "./models/singUpSchema.model";
import { styled } from "./styled";

export function FormsSingUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateAcountFormData>({
    resolver: zodResolver(CreateAcountSchema),
    defaultValues: {
      email: "",
      confirm_password: "",
      cpf: "",
      password: "",
      name: "",
      telefone: "",
    },
  });

  function handleSubmitForm(form: CreateAcountFormData) {
    console.log(form);
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styled.containerForms}>
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
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Nome:"
              keyboardAppearance="default"
              keyboardType="default"
              key={"inputName"}
              value={value}
              errorMessage={errors.name?.message}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="CPF:"
              keyboardAppearance="default"
              keyboardType="number-pad"
              key={"inputCpf"}
              value={formatarCPF(value)}
              errorMessage={errors.cpf?.message}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="telefone"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Telefone:"
              keyboardAppearance="default"
              keyboardType="number-pad"
              key={"inputTelefone"}
              value={formatarTelefone(value)}
              errorMessage={errors.telefone?.message}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Senha:"
              keyboardAppearance="default"
              keyboardType="default"
              secureTextEntry
              key={"inputpPassword"}
              value={value}
              errorMessage={errors.password?.message}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="confirm_password"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Confirmar Senha:"
              keyboardAppearance="default"
              keyboardType="default"
              secureTextEntry
              key={"inputpConfirmPassword"}
              value={value}
              errorMessage={errors.confirm_password?.message}
              onChangeText={onChange}
            />
          )}
        />

        <ButtonComponent
          onPress={handleSubmit(handleSubmitForm)}
          bgColor={THEME.COLORS.BEREIA_YELLOW}
          title="Criar Conta"
        />

        <Footer />
      </View>
    </ScrollView>
  );
}
