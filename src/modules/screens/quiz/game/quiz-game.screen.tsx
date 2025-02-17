import * as React from 'react';
import { Dimensions, Text, View, Pressable, ScrollView } from 'react-native';
import Animated, { FadeInDown, interpolate } from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  TAnimationStyle,
} from 'react-native-reanimated-carousel';
import { styles } from '~/modules/screens/quiz/game/quiz-game.styles.ts';
import { DUMMY_QUIZ_DATA } from '~/modules/screens/quiz/quiz.data.ts';
import { useCallback, useEffect, useState } from 'react';
import { LightContainer } from '~/shared/components/ui/light-container/light-container.component.tsx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  NAVIGATION_KEYS,
  QuizStackParamList,
} from '~/modules/navigation/types/navigation.type.ts';
import { Header } from '~/shared/components/header/header.component.tsx';
import { Button } from '~/shared/components/ui/button/button.component.tsx';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '~/shared/styles/colors.ts';
import CorrectIcon from '~/../assets/icons/CorrectIcon.svg';
import { Alert } from '~/shared/components/ui/alert/alert.component.tsx';
import { useGameStore } from '~/shared/store/game.store.ts';
import BalloonIcon from '~/../assets/icons/BalloonIcon.svg';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

type QuizGameScreenProps = NativeStackScreenProps<
  QuizStackParamList,
  NAVIGATION_KEYS.QUIZ_GAME
>;

export const QuizGameScreen = ({ navigation }: QuizGameScreenProps) => {
  const paddingBottom = useBottomTabBarHeight();

  const width = Dimensions.get('window').width;
  const PAGE_WIDTH = width - 48;
  const PAGE_HEIGHT = 560;
  const ref = React.useRef<ICarouselInstance>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string | null;
  }>({});
  const [gameOver, setGameOver] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const updateScore = useGameStore((state) => state.updateScore);
  const handleNext = () => {
    if (currentIndex < DUMMY_QUIZ_DATA.length - 1) {
      ref.current?.next();
      setCurrentIndex((prev) => prev + 1);
      setSelectedValue('');
    } else {
      setGameOver(true);
    }
  };

  const handleCollect = () => {
    updateScore(25);
    setGameOver(false);
    navigation.navigate(NAVIGATION_KEYS.QUIZ_MAIN);
  };

  const animationCarouselStyle = useCallback(
    (value: number) => {
      'worklet';

      const zIndex = interpolate(value, [-1, 0, 1], [10, 30, 20]);
      const translateY = interpolate(
        value,
        [-1, 0, 1],
        [-PAGE_HEIGHT, 0, PAGE_HEIGHT],
      );
      const opacity = interpolate(value, [-1, 0, 1], [0, 1, 0]);

      return {
        transform: [{ translateY }],
        zIndex,
        opacity,
      };
    },
    [PAGE_HEIGHT],
  );

  const renderItem = useCallback(
    ({ item }: { item: (typeof DUMMY_QUIZ_DATA)[0]; index: number }) => {
      return (
        <Item
          item={item}
          setSelectedValue={setSelectedValue}
          selectedValue={selectedValue}
        />
      );
    },
    [PAGE_HEIGHT, PAGE_WIDTH, selectedValue],
  );

  return (
    <LightContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { paddingBottom }]}>
          <Header
            score={true}
            logo={false}
            timer={true}
            timeLeft={String(formatTime(timeLeft))}
            goBack={navigation.goBack}
          />
          <View style={styles.carouselContainer}>
            <View
              id="carousel-component"
              dataSet={{ kind: 'custom-animations', name: 'tinder' }}
            >
              <Carousel
                ref={ref}
                enabled={false}
                loop={false}
                width={PAGE_WIDTH}
                height={445}
                data={DUMMY_QUIZ_DATA}
                renderItem={renderItem}
                customAnimation={animationCarouselStyle as TAnimationStyle}
                scrollAnimationDuration={800}
                autoFillData={false}
                style={{
                  width: PAGE_WIDTH,
                  height: PAGE_HEIGHT,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </View>

            <Button
              containerStyles={{ width: 280 }}
              text="Next"
              option="accent"
              disabled={!selectedValue}
              onPress={handleNext}
            />
          </View>
        </View>
        <Alert visible={gameOver}>
          <View style={styles.alertContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.alertHeading}>Quiz Completed!</Text>
              <Text style={styles.alertText}>
                You scored 25 points! 🔥 Well done! Keep playing and challenge
                yourself!
              </Text>
            </View>

            <View style={styles.scoreContainer}>
              <BalloonIcon width={40} height={40} />
              <Text style={styles.scoreText}>+25</Text>
            </View>

            <Button
              text="Collect Reward"
              option="accent"
              onPress={handleCollect}
            />
          </View>
        </Alert>
      </ScrollView>
    </LightContainer>
  );
};

const Item = ({
  item,
  selectedValue,
  setSelectedValue,
}: {
  item: (typeof DUMMY_QUIZ_DATA)[0];
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(300)}
      style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={[styles.card]}>
        <View style={styles.header}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.question}>{item.question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {item.options.map((option) => (
            <React.Fragment key={option.id}>
              {selectedValue === item.correctAnswer &&
              option.id === item.correctAnswer ? (
                <LinearGradient
                  colors={COLORS.darkGradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.option}
                >
                  <CorrectIcon />
                  <Text style={styles.correct}>{option.option}</Text>
                </LinearGradient>
              ) : (
                <Pressable
                  disabled={!!selectedValue}
                  style={[
                    styles.option,
                    selectedValue === option.id && styles.incorrect,
                  ]}
                  onPress={() => setSelectedValue(option.id)}
                >
                  <Text style={styles.optionText}>{option.option}</Text>
                </Pressable>
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    </Animated.View>
  );
};
