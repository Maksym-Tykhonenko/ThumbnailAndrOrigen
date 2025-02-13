import { Dimensions, Modal, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { styles } from "~/shared/components/ui/alert/alert.styles";
import { COLORS } from "~/shared/styles/colors";

type AlertProps = {
  visible: boolean;
  children: React.ReactNode;
};
export const Alert = ({ visible, children }: AlertProps) => {
  const width = Dimensions.get("window").width - 48;
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <BlurView intensity={20} style={styles.blur} tint="dark" />
        <View style={[styles.alertBox, { width: width }]}>{children}</View>
      </View>
    </Modal>
  );
};
