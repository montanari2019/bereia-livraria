import { StackRoutesNavigatorPublicProps } from "@/src/routes/stackRoutes/@types";
import { useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function SingUp() {
  const navigator = useNavigation<StackRoutesNavigatorPublicProps>();
  return (
    <View>
      <Text>SingUp</Text>
    </View>
  );
}
