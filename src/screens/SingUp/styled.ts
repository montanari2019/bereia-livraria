import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.WHITE,
    flex: 1,
  },

  containerHeader: {
    height: 250,
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

  containerTextHeader: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: THEME.SIZES.SIZE_LG_24,
    gap: 8,
  },

  textTop: {
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.WHITE,
  },
  textBottom: {
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.WHITE,
  },

  containerForm: {
    flex: 1,
    marginHorizontal: THEME.SIZES.SIZE_LG_24,
  },
});
