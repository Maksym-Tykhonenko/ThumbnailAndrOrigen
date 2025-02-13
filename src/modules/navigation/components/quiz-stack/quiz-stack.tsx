import { useMemo } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  NAVIGATION_KEYS,
  QuizStackParamList,
} from '~/modules/navigation/types/navigation.type'
import { STACK_SCREEN_OPTIONS } from '~/modules/navigation/constants/screen-options'
import { QuizMainScreen } from '~/modules/screens/quiz/main/quiz-main.screen'
import { QuizGameScreen } from '~/modules/screens/quiz/game/quiz-game.screen'

const Stack = createNativeStackNavigator<QuizStackParamList>()
export const QuizStack = () => {
  const screens = useMemo(() => {
    return (
      <>
        <Stack.Screen
          name={NAVIGATION_KEYS.QUIZ_MAIN}
          component={QuizMainScreen}
        />
        <Stack.Screen
          name={NAVIGATION_KEYS.QUIZ_GAME}
          component={QuizGameScreen}
        />
      </>
    )
  }, [])

  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      {screens}
    </Stack.Navigator>
  )
}
