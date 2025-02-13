import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';

type BalloonBtnProps = {
  Component: React.FC<{ width: number; height: number }>;
  onPress: () => void;
  x: number;
  animatedY: Animated.Value;
};

export const BalloonBtn = ({
  Component,
  onPress,
  x,
  animatedY,
}: BalloonBtnProps) => {
  return (
    <Animated.View
      style={{
        zIndex: 15,
        position: 'absolute',
        left: x,
        transform: [{ translateY: animatedY }, { translateX: '-50%' }],
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Component width={65} height={145} />
      </TouchableOpacity>
    </Animated.View>
  );
};
