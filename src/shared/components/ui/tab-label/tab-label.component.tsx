import { Text, View } from "react-native";
import React from "react";
import { styles } from "~/shared/components/ui/tab-label/tab-label.styles";

type TabLabelProps = {
  children: React.ReactNode;
  focused: boolean;
  color: string;
};
export const TabLabel = ({ children, color, focused }: TabLabelProps) => {
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.text, { color: color }]}>{children}</Text>
      {focused && (
        <View style={[styles.border, { backgroundColor: color }]}></View>
      )}
    </View>
  );
};
