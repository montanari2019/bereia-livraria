import { Text } from "react-native";
import { styled } from "./styled";

interface PragraphTitleProps {
  title: string;
}

export function ParagraphTitle({ title }: PragraphTitleProps) {
  return <Text style={styled.paragraphTitle}>{title}</Text>;
}
