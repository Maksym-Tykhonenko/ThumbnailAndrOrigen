import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useMemo } from "react";
import {
  NAVIGATION_KEYS,
  RootStackParamList,
} from "~/modules/navigation/types/navigation.type";
import { WelcomeScreen } from "~/modules/screens/welcome/welcome.screen";
import { STACK_SCREEN_OPTIONS } from "~/modules/navigation/constants/screen-options";
import { NavBottoms } from "~/modules/navigation/components/nav-bottoms/nav-bottoms";
import { NavContainer } from "~/modules/navigation/components/nav-container/nav-container";
import { useGameStore } from "~/shared/store/game.store";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootNav = () => {
  const isOpened = useGameStore((state) => state.isOpened);
  const screens = useMemo(() => {
    return (
      <>
        {isOpened ? (
          <Stack.Screen name={NAVIGATION_KEYS.TABS} component={NavBottoms} />
        ) : (
          <Stack.Screen
            name={NAVIGATION_KEYS.WELCOME}
            component={WelcomeScreen}
          />
        )}
      </>
    );
  }, [isOpened]);
  return (
    <NavContainer>
      <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
        {screens}
      </Stack.Navigator>
    </NavContainer>
  );
};
