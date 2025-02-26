import { Text, TextInput } from "react-native";
import { InputComponentProps } from "./interface/interfaceBaseInput";
import { useState } from "react";
import { styled } from "./styled";
import { THEME } from "@/src/theme/global";

export function InputComponent({
  errorMessage,
  borderColor = THEME.COLORS.BEREIA_YELLOW,
  ...resto
}: InputComponentProps) {
  const [focusInput, setFocusInput] = useState(false);

  const handleFocus = () => {
    setFocusInput(true);
  };

  const handleBlur = () => {
    setFocusInput(false);
  };

  const containerStyle = [
    styled.input,
    focusInput && styled.inputFocus,
    !!errorMessage && styled.inputInvalid,
  ];

  return (
    <>
      <Text style={styled.textErrorMessage}>{errorMessage}</Text>
      <TextInput
        {...resto}
        placeholderTextColor={THEME.COLORS.GRAY_300}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        style={containerStyle}
      />
    </>
  );
}
