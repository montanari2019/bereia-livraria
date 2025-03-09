import { StyleSheet, Text, TextInput, TextStyle } from "react-native";
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

  const StyledInput: TextStyle = {
    width: "100%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    borderColor: borderColor,
    borderWidth: 1,
    paddingHorizontal: THEME.SIZES.SIZE_XS_16,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  };
  const StyledInputFocus: TextStyle = {
    width: "100%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    borderColor: borderColor,
    borderWidth: 2,
    paddingHorizontal: THEME.SIZES.SIZE_XS_16,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  };
  const StyledInputInvalid: TextStyle = {
    width: "100%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    borderColor: THEME.COLORS.DANGER_500,
    borderWidth: 1,
    paddingHorizontal: THEME.SIZES.SIZE_XS_16,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  };

  // Estilos base
  const inputStyle = [
    StyledInput,
    focusInput && StyledInputFocus,
    errorMessage && StyledInputInvalid,
  ];

  return (
    <>
      {errorMessage && (
        <Text style={styled.textErrorMessage}>{errorMessage}</Text>
      )}
      <TextInput
        {...resto}
        placeholderTextColor={THEME.COLORS.GRAY_300}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputStyle}
      />
    </>
  );
}
