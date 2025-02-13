import { useMemo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeStackParamList,
  NAVIGATION_KEYS,
} from '~/modules/navigation/types/navigation.type';
import { STACK_SCREEN_OPTIONS } from '~/modules/navigation/constants/screen-options';
import { HomeMainScreen } from '~/modules/screens/home/main/home-main.screen';
import { HomeGameScreen } from '~/modules/screens/home/game/home-game.screen';
import { HomeGalleryScreen } from '~/modules/screens/home/gallery/home-gallery.screen.tsx';
import { HomeCollectionsScreen } from '~/modules/screens/home/collections/home-collections.screen.tsx';

const Stack = createNativeStackNavigator<HomeStackParamList>();
export const HomeStack = () => {
  const screens = useMemo(() => {
    return (
      <>
        <Stack.Screen
          name={NAVIGATION_KEYS.HOME_MAIN}
          component={HomeMainScreen}
        />
        <Stack.Screen
          name={NAVIGATION_KEYS.HOME_GAME}
          component={HomeGameScreen}
        />
        <Stack.Screen
          name={NAVIGATION_KEYS.HOME_COLLECTIONS}
          component={HomeCollectionsScreen}
        />
        <Stack.Screen
          name={NAVIGATION_KEYS.HOME_GALLERY}
          component={HomeGalleryScreen}
        />
      </>
    );
  }, []);

  return (
    <Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
      {screens}
    </Stack.Navigator>
  );
};
