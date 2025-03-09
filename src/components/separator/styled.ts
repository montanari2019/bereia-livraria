import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  separatorContainer: {
    width: "100%",
    alignItems: "center",
  },
  separator: {
    width: "60%",
    height: 5,
    backgroundColor: THEME.COLORS.GRAY_200,
    marginVertical: THEME.SIZES.SIZE_LG_24,
    borderRadius: 15,
  },
});
