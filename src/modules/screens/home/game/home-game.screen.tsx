import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Animated,ImageBackground } from 'react-native';
import { LightContainer } from '~/shared/components/ui/light-container/light-container.component';
import { Header } from '~/shared/components/header/header.component';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  NAVIGATION_KEYS,
  QuizStackParamList,
} from '~/modules/navigation/types/navigation.type';
import { styles } from '~/modules/screens/home/game/home-game.styles.ts';
import { BalloonsOptions } from '~/modules/screens/home/game/home-game.type.ts';
import { BalloonBtn } from '~/shared/components/ui/balloon-btn/balloon-btn.component.tsx';
import { TimerCircleBtn } from '~/shared/components/ui/timer-circle-btn/timer-circle-btn.component.tsx';
import { Alert } from '~/shared/components/ui/alert/alert.component.tsx';
import { Button } from '~/shared/components/ui/button/button.component.tsx';
import { useGameStore } from '~/shared/store/game.store.ts';

type HomeGameScreenProps = NativeStackScreenProps<
  QuizStackParamList,
  NAVIGATION_KEYS.HOME_GAME
>;

const { width, height } = Dimensions.get('window');

interface IBalloon {
  id: number;
  color: keyof typeof BalloonsOptions;
  x: number;
  animatedY: Animated.Value;
}

interface ITimeCircles {
  id: number;
  x: number;
  animatedY: Animated.Value;
}

type GameStatus = 'started' | 'succeed' | 'failed';

export const HomeGameScreen = ({ navigation }: HomeGameScreenProps) => {
  const [balloons, setBalloons] = useState<IBalloon[]>([]);
  const [timeCircles, setTimeCircles] = useState<ITimeCircles[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [gameStatus, setGameStatus] = useState<GameStatus>('started');
  const [pressedBalloonIds, setPressedBalloonIds] = useState<Set<number>>(
    new Set(),
  );

  const updateScore = useGameStore((state) => state.updateScore);

  useEffect(() => {
    setGameStatus('started');
    setTimeLeft(60); // Reset timer
    setPressedBalloonIds(new Set()); // Reset pressed balloon tracker
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (gameStatus !== 'started' || timeLeft <= 1) return;

    const interval = setInterval(() => {
      const colors = Object.keys(
        BalloonsOptions,
      ) as (keyof typeof BalloonsOptions)[];
      const color = colors[Math.floor(Math.random() * colors.length)];

      const balloonDuration = Math.random() * 3000 + 3000;
      const animatedY = new Animated.Value(height);
      Animated.timing(animatedY, {
        toValue: -100,
        duration: balloonDuration,
        useNativeDriver: true,
      }).start();

      animatedY.addListener(({ value }) => {
        if (value <= -100) {
          setBalloons((prev) => prev.filter((b) => b.animatedY !== animatedY));
          if (color !== 'yellow') {
            setGameStatus('failed');
            updateScore(-15);
            setBalloons([]);
            setPressedBalloonIds(new Set());
            setTimeCircles([]);
          }
        }
      });

      setBalloons((prev) => [
        ...prev,
        {
          id: Math.random(),
          color,
          x: Math.random() * (width - 50),
          animatedY,
        },
      ]);

      if (Math.random() > 0.8) {
        const timeDuration = Math.random() * 3000 + 3000;

        const timeAnimatedY = new Animated.Value(height);
        Animated.timing(timeAnimatedY, {
          toValue: -100,
          duration: timeDuration,
          useNativeDriver: true,
        }).start();

        timeAnimatedY.addListener(({ value }) => {
          if (value <= -100) {
            setTimeCircles((prev) =>
              prev.filter((t) => t.animatedY !== timeAnimatedY),
            );
          }
        });

        setTimeCircles((prev) => [
          ...prev,
          {
            id: Math.random(),
            x: Math.random() * (width - 40),
            animatedY: timeAnimatedY,
          },
        ]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStatus, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameStatus('succeed');
      setBalloons([]);
      setPressedBalloonIds(new Set());
      setTimeCircles([]);
    }
  }, [timeLeft]);

  const popBalloon = (id: number, color: keyof typeof BalloonsOptions) => {
    if (color === 'yellow') {
      setTimeLeft((prev) => Math.max(prev - 10, 0)); // Decrease 10 seconds for yellow balloon
    } else {
      setPressedBalloonIds((prev) => new Set(prev.add(id)));
    }

    setBalloons((prev) => prev.filter((b) => b.id !== id));
    updateScore(color !== 'yellow' ? 1 : 0);
  };

  const collectTime = (id: number) => {
    setTimeCircles((prev) => prev.filter((t) => t.id !== id));
    setTimeLeft((prev) => prev + 10);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground   style={{flex:1}} source={require('../../../../../assets/new/screen3.jpg')}>
      <View style={styles.container}>
        <Header
          goBack={() => navigation.goBack()}
          logo={false}
          timer={true}
          score={true}
          timeLeft={String(formatTime(timeLeft))}
        />
        <Alert visible={gameStatus !== 'started'}>
          {gameStatus === 'succeed' ? (
            <View style={styles.alertContainer}>
              <View style={styles.alertTextContainer}>
                <Text style={styles.alertHeading}>
                  You did it! All balloons popped!
                </Text>
                <Text style={styles.alertText}>
                  Great job! You've cleared the level. Grab your prize and keep
                  playing!
                </Text>
              </View>
              <View style={styles.prizeContainer}>
                <BalloonsOptions.pink width={34} height={76} />
              </View>
              <Button
                text="Continue"
                option="accent"
                onPress={() => navigation.goBack()}
              />
            </View>
          ) : (
            <View style={styles.alertContainer}>
              <View style={styles.alertTextContainer}>
                <Text style={styles.alertHeading}>Game Over!</Text>
                <Text style={styles.alertText}>
                  You lost 15 points! 😢 Watch out for the yellow balloons next
                  time. Try again and beat your high score!
                </Text>
              </View>
              <Button
                text="Try again"
                option="accent"
                onPress={() => navigation.goBack()}
              />
            </View>
          )}
        </Alert>

        <>
          {balloons.map((b) => {
            const BalloonComponent = BalloonsOptions[b.color];
            return (
              <BalloonBtn
                key={b.id}
                Component={BalloonComponent}
                x={b.x}
                animatedY={b.animatedY}
                onPress={() => popBalloon(b.id, b.color)}
              />
            );
          })}
          {timeCircles.map((t) => (
            <TimerCircleBtn
              key={t.id}
              x={t.x}
              animatedY={t.animatedY}
              value={10}
              onPress={() => collectTime(t.id)}
            />
          ))}
        </>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>Pop the balloons!</Text>
          <Text style={styles.text}>
            ❌ Do not tap the yellow balls. They will decrease your time. Play
            carefully!
          </Text>
        </View>
      </View>
</ImageBackground>
    </View>
  );
};
