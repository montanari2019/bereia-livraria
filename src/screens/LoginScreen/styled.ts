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

  buttonDisplay: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: THEME.SIZES.SIZE_MD_20,
    marginHorizontal: THEME.SIZES.SIZE_LG_24,
  },
  textButton: {
    fontSize: THEME.SIZES.SIZE_XS_16,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
    color: THEME.COLORS.WHITE,
  },
  buttonLogin: {
    backgroundColor: THEME.COLORS.BEREIA_YELLOW,
    borderRadius: 10,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonCreatAcount: {
    backgroundColor: THEME.COLORS.BEREIA_BRONW,
    borderRadius: 10,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  containerFooter: {
    alignItems: "center",
    marginBottom: THEME.SIZES.SIZE_SM_18,
  },

  textFooter: {
    fontSize: THEME.SIZES.SIZE_XXXS_12,
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  },
});
