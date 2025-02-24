import { Footer } from "@/src/components/footer/footer";
import { HeaderPublic } from "@/src/components/headerPublic/HeaderPublic";
import { PanGestureHandlerGoBack } from "@/src/components/panGestureHandleGoBack/panGestureHandleGoBack";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ForgotPassword() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <PanGestureHandlerGoBack route="signIn">
        <View>
          <HeaderPublic />
          <Text>Tela de Forgout Password</Text>
        </View>
        <Footer />
      </PanGestureHandlerGoBack>
    </ScrollView>
  );
}
