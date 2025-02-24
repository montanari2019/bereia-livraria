import { THEME } from "@/src/theme/global";
import React from "react";
import { View, ActivityIndicator } from "react-native";

// Definindo a tipagem da props
interface ShimmerLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export function ShimmerLoading({ isLoading, children }: ShimmerLoadingProps) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color={THEME.COLORS.BEREIA_YELLOW} />
      ) : (
        children
      )}
    </View>
  );
}
