import { LightContainer } from '~/shared/components/ui/light-container/light-container.component';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  NAVIGATION_KEYS,
  QuizStackParamList,
} from '~/modules/navigation/types/navigation.type';
import { View } from 'react-native';
import { Button } from '~/shared/components/ui/button/button.component';
import { styles } from '~/modules/screens/quiz/main/quiz-main.styles';
import { Header } from '~/shared/components/header/header.component.tsx';

type QuizMainScreenProps = NativeStackScreenProps<
  QuizStackParamList,
  NAVIGATION_KEYS.QUIZ_MAIN
>;
export const QuizMainScreen = ({ navigation }: QuizMainScreenProps) => {
  return (
    <LightContainer>
      <View style={styles.container}>
        <Header />
        <View style={styles.btnContainer}>
          <Button
            text="Start Quiz"
            option="accent"
            onPress={() => navigation.navigate(NAVIGATION_KEYS.QUIZ_GAME)}
          />
        </View>
      </View>
    </LightContainer>
  );
};
