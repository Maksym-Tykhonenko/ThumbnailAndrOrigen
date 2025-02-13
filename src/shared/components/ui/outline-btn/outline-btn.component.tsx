import { Pressable, Text } from "react-native";
import React from "react";
import { styles } from "~/shared/components/ui/outline-btn/outlne-btn.styles";

type OutlineBtnProps = {
  Icon?: React.ReactNode;
  text?: string;
  onPress?: () => void;
  disabled?: boolean;
};
export const OutlineBtn = ({
  text,
  Icon,
  onPress,
  disabled = true,
}: OutlineBtnProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress} disabled={disabled}>
      {Icon}
      {text && <Text style={styles.text}>{text}</Text>}
    </Pressable>
  );
};
