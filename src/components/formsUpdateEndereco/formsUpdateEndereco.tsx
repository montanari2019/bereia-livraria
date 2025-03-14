import { THEME } from "@/src/theme/global";
import { formatarCPF, formatarTelefone } from "@/src/utils/mascara.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { ButtonComponent } from "../buttomComponent/buttonComponent";
import { Footer } from "../footer/footer";
import { InputComponent } from "../inputComponent/inputComponents";
import {
  UpdateEnderecoFormData,
  UpdateEnderecoSchema,
} from "./models/singUpSchema.model";
import { styled } from "./styled";

export function FormsUpdateEndereco() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UpdateEnderecoFormData>({
    resolver: zodResolver(UpdateEnderecoSchema),
    defaultValues: {
      cep: "",
      cidade_uf: "",
      complemento: "",
      endereco: "",
      nome: "",
      numero: "",
    },
  });

  function handleSubmitForm(form: UpdateEnderecoFormData) {
    console.log(form);
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      bounces={false}
      overScrollMode="never"
      scrollEnabled
    >
      <View style={styled.containerForms}>
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              borderColor={THEME.COLORS.BEREIA_YELLOW}
              placeholder="Nome:"
              keyboardAppearance="default"
              keyboardType="default"
              key={"inputNome"}
              value={value}
              errorMessage={errors.nome?.message}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="endereco"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              borderColor={THEME.COLORS.BEREIA_YELLOW}
              placeholder="Endereço:"
              keyboardAppearance="default"
              keyboardType="default"
              key={"inputEndereco"}
              value={value}
              errorMessage={errors.endereco?.message}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="numero"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              borderColor={THEME.COLORS.BEREIA_YELLOW}
              placeholder="Número:"
              keyboardAppearance="default"
              keyboardType="number-pad"
              key={"inputNumero"}
              value={formatarCPF(value)}
              errorMessage={errors.numero?.message}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="cep"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              borderColor={THEME.COLORS.BEREIA_YELLOW}
              placeholder="Cep:"
              keyboardAppearance="default"
              keyboardType="number-pad"
              key={"inputCep"}
              value={formatarTelefone(value)}
              errorMessage={errors.cep?.message}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="cidade_uf"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              borderColor={THEME.COLORS.BEREIA_YELLOW}
              placeholder="Cidade / UF:"
              keyboardAppearance="default"
              keyboardType="default"
              secureTextEntry
              key={"inputCidadeUF"}
              value={value}
              errorMessage={errors.cidade_uf?.message}
              onChangeText={onChange}
            />
          )}
        />

        <ButtonComponent
          onPress={handleSubmit(handleSubmitForm)}
          bgColor={THEME.COLORS.BEREIA_YELLOW}
          title="Alterar Endereço"
          style={{
            marginTop: 5,
          }}
        />
      </View>
    </ScrollView>
  );
}
