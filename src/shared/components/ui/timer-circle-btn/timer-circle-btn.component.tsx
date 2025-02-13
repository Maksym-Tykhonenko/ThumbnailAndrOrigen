import React from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '~/shared/styles/colors.ts';
import { styles } from '~/shared/components/ui/timer-circle-btn/timer-circle-btn.styles.ts';

type TimerCircleBtnProps = {
  onPress: () => void;
  value: number;
  x: number;
  animatedY: Animated.Value;
};

export const TimerCircleBtn = ({
  x,
  animatedY,
  value,
  onPress,
}: TimerCircleBtnProps) => {
  const randomNum = -35 + Math.floor(Math.random() * 15) * 5;

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: x,
        transform: [
          { translateY: animatedY },
          { translateX: '-50%' },
          { rotate: `${randomNum}deg` },
        ],
        zIndex: 15,
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={COLORS.lightGradient} style={styles.border}>
          <LinearGradient
            colors={COLORS.darkGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bgColor}
          >
            <Text style={styles.text}>+{value}s</Text>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};
