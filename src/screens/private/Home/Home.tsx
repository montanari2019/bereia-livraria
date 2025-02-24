import { HomeStackRoutesNavigatorPrivateProps } from "@/src/routes/privateStackRoutes/homeStackRoutes/@types";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const navigator = useNavigation<HomeStackRoutesNavigatorPrivateProps>();

  function handleNavigationItem() {
    navigator.navigate("itemStack");
    // Add your navigation logic here
  }
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity onPress={handleNavigationItem}>
        <Text>Go to Item Stack</Text>
      </TouchableOpacity>
    </View>
  );
}
