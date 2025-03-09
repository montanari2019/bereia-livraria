import { Text, TextProps, TextStyle } from "react-native";

interface PragraphTitleProps extends TextProps {
  title: string;
  style?: TextStyle;
}

export function ParagraphComponent({
  title,
  style,
  ...resto
}: PragraphTitleProps) {
  return (
    <Text style={{ ...style }} {...resto}>
      {title}
    </Text>
  );
}
