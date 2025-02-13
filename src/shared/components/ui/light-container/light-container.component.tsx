import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "~/shared/components/ui/light-container/light-container.styles";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "~/shared/styles/colors";
import React from "react";

type LightContainerProps = {
  children: React.ReactNode;
};
export const LightContainer = ({ children }: LightContainerProps) => {
  return (
    <LinearGradient colors={COLORS.lightGradient} style={styles.gradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};
