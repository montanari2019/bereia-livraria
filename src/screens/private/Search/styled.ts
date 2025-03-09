import { THEME } from "@/src/theme/global";
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    paddingHorizontal: THEME.SIZES.SIZE_XS_16,
    paddingTop: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
  },

  header: {
    marginTop: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
  searchInput: {
    borderWidth: 2,
    borderColor: THEME.COLORS.GRAY_200,
    width: "90%",
    height: THEME.SIZES.SIZE_HEIGHT_50,
    borderRadius: 15,
    color: THEME.COLORS.GRAY_300,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.SIZES.SIZE_XXXS_12,
    paddingHorizontal: THEME.SIZES.SIZE_SM_18,
  },

  iconStyle: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.BEREIA_YELLOW,
    borderRadius: 50,
  },

  inputSearch: {
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
    color: THEME.COLORS.GRAY_500,
    width: "75%",
  },

  listContainer: {
    gap: THEME.SIZES.SIZE_SM_18,
  },

  buttonRecentSearch: {
    flexDirection: "row",
    width: "auto",
    gap: THEME.SIZES.SIZE_SM_18,
    alignItems: "center",
  },

  textRecentSearch: {
    fontSize: THEME.SIZES.SIZE_XSS_14,
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONT_FAMILY.FONT_POPPINS_400,
  },

  itemImage: {
    width: 109,
    height: 162,
    resizeMode: "cover",
    borderRadius: THEME.SIZES.SIZE_RADIUS_15,
  },

  displayTextItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: THEME.SIZES.SIZE_XXXS_12,
  },

  displayFlatList: {
    flex: 1,
    paddingBottom: THEME.SIZES.SIZE_MARGIN_HORIZONTA_24,
  },
});
