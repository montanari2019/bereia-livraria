import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Loading } from "../components/loading/Loading";
import { Routes } from "../routes";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {fontsLoaded ? <Routes /> : <Loading textFild />}
      </GestureHandlerRootView>
    </>
  );
}
