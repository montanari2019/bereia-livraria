import { Image, Text, View } from "react-native";
import { styled } from "./styled";

interface ItemHomeProps {
  url: string;
  name: string;
  details: string;
}
export function ItemHome({ details, name, url }: ItemHomeProps) {
  return (
    <View style={styled.itemContainer}>
      <Image
        source={{
          uri: url,
        }}
        style={styled.itemImage}
      />
      <View style={styled.itemInfo}>
        <Text style={styled.itemName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styled.itemDetails}>{details}</Text>
      </View>
    </View>
  );
}
