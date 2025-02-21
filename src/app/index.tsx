import { StatusBar, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Loading } from "../components/loading/loading";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle={"dark-content"}
        translucent={true}
      />
      {fontsLoaded ? (
        <View>
          <Text>Não tem nada a exibir ainda</Text>
        </View>
      ) : (
        <Loading textFild />
      )}
    </>
  );
}
