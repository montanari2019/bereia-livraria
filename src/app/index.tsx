import { StatusBar, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Loading } from "../components/loading/Loading";
import LoginHome from "../screens/LoginScreen/LoginScreen";
import { Routes } from "../routes";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return <>{fontsLoaded ? <Routes /> : <Loading textFild />}</>;
}
