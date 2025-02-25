import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: THEME.COLORS.GRAY_100,
    alignItems: "center",
  },
  header: {
    paddingHorizontal: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    paddingTop: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  iconStyle: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.BEREIA_YELLOW,
    borderRadius: 50,
  },

  headerIconsRigth: {
    width: "auto",
    flexDirection: "row",
    gap: THEME.SIZES.SIZE_XXXS_12,
  },

  imagemProduto: {
    height: 287,
    width: 194,
    marginVertical: THEME.SIZES.SIZE_SM_18,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
  },

  bodyItem: {
    backgroundColor: THEME.COLORS.WHITE,
    padding: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  textTitleDisplay: {
    marginVertical: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    width: "100%",
    alignContent: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  nomeLivro: {
    textTransform: "capitalize",
    width: "80%",
    color: THEME.COLORS.GRAY_400,
    fontSize: THEME.SIZES.SIZE_MD_20,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
  },

  precoLivro: {
    color: THEME.COLORS.BEREIA_YELLOW,
    fontSize: THEME.SIZES.SIZE_MD_20,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
  },

  descricaoLivro: {
    textAlign: "justify",
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  },

  botaoComprar: {
    height: THEME.SIZES.SIZE_HEIGHT_50,
    backgroundColor: THEME.COLORS.BEREIA_YELLOW,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: THEME.SIZES.SIZE_SM_18,
  },

  botaoComprarTexto: {
    fontSize: THEME.SIZES.SIZE_XS_16,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_700,
  },

  botaoVoltar: {
    width: "100%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    backgroundColor: THEME.COLORS.GRAY_100,
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: THEME.SIZES.SIZE_LG_24,
  },
});
