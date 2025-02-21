import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: THEME.COLORS.GRAY_10,
    // padding: THEME.SIZES.SIZE_XSS_14,
  },
  containerHeader: {
    height: 450,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

    width: "100%",
    backgroundColor: THEME.COLORS.GRAY_600,
  },

  lupaContent: {
    top: -10,
    right: -50,

    position: "absolute",
  },

  imagemLupa: {
    width: 248,
    height: 248,
    resizeMode: "contain",
  },

  displayContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: THEME.SIZES.SIZE_LG_24,
    marginTop: 50,
  },

  imagemLogo: {
    resizeMode: "contain",
  },

  textLogo: {
    width: 200,
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.SIZES.SIZE_XSS_14,
    textAlign: "center",
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  },
});
