import {
  Pressable,
  StyleSheet,
  StyleSheetProperties,
  Text,
} from 'react-native';
import { styles } from '~/shared/components/ui/button/button.styles';
import React from 'react';

type ButtonProps = {
  text: string;
  option: 'accent' | 'white' | 'opacity';
  onPress: () => void;
  Icon?: React.ReactNode;
  disabled?: boolean;
  containerStyles?: StyleSheetProperties;
};
export const Button = ({
  text,
  option,
  onPress,
  Icon,
  disabled,
  containerStyles,
}: ButtonProps) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.container,
        containerStyles,
        (option === 'accent' && styles.accentBtn) ||
          (option === 'white' && styles.whiteBtn) ||
          styles.opacityBtn,
        disabled && styles.pressed,
      ]}
    >
      <Text
        style={[
          styles.text,
          option === 'white' ? styles.accentText : styles.whiteText,
        ]}
      >
        {text}
      </Text>
      {Icon}
    </Pressable>
  );
};
