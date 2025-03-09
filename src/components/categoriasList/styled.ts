import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  contianerCategoria: {
    // flexDirection: "row",
    // gap: THEME.SIZES.SIZE_SM_18,
  },

  categoriaItemContainer: {
    paddingVertical: THEME.SIZES.SIZE_SM_18,
    justifyContent: "center",
    alignItems: "center",
    gap: THEME.SIZES.SIZE_XXXS_12,
    borderRadius: 15,
  },
  containerButtonAndParagraph: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  itemCategoryText: {
    width: "100%",
    fontSize: THEME.SIZES.SIZE_XSS_14,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.GRAY_500,
    textTransform: "capitalize",
  },

  itemCategoryTextSelect: {
    width: "100%",
    fontSize: THEME.SIZES.SIZE_XSS_14,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.BEREIA_YELLOW,
    textTransform: "capitalize",
  },

  emptyListText: {
    fontSize: THEME.SIZES.SIZE_XSS_14,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.GRAY_500,
  },
  imagemCategory: {
    objectFit: "cover",
    width: 68,
    height: 68,
    borderRadius: 50,

    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Sombra para Android
    elevation: 5,
  },
});
