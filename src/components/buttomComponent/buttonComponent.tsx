import { THEME } from "@/src/theme/global";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styled } from "./styled";

interface ButtonComponentProps extends TouchableOpacityProps {
  title: string;
  bgColor: string;
  textColor?: string;
}

export function ButtonComponent({
  bgColor,
  textColor = THEME.COLORS.WHITE,
  title,
  ...resto
}: ButtonComponentProps) {
  return (
    <TouchableOpacity
      {...resto}
      style={{
        backgroundColor: bgColor,
        ...styled.button,
      }}
    >
      <Text
        style={{
          color: textColor,
          ...styled.textButton,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
