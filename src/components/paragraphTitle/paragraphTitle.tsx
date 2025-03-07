import { THEME } from "@/src/theme/global";
import { Text, TextStyle } from "react-native";

interface PragraphTitleProps extends TextStyle {
  title: string;
}

export function ParagraphComponent({
  title,
  color = THEME.COLORS.GRAY_500,
  fontSize = THEME.SIZES.SIZE_SM_18,
  fontFamily = THEME.FONT_FAMILY.FONT_POPPINS_700,
  ...resto
}: PragraphTitleProps) {
  return (
    <Text
      style={{
        fontFamily,
        color,
        fontSize,
        ...resto,
      }}
    >
      {title}
    </Text>
  );
}
