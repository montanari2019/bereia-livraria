import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    backgroundColor: THEME.COLORS.BEREIA_BRONW,
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
  },

  textItemName: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
