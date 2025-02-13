import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum NAVIGATION_KEYS {
  WELCOME = 'WELCOME',
  HOME = 'HOME',
  HOME_MAIN = 'HOME_MAIN',
  HOME_GAME = 'HOME_GAME',
  HOME_GALLERY = 'HOME_GALLEY',
  HOME_COLLECTIONS = 'HOME_COLLECTION',
  QUIZ = 'QUIZ',
  QUIZ_MAIN = 'QUIZ_MAIN',
  QUIZ_GAME = 'QUIZ_GAME',
  INVENTORY = 'INVENTORY',
  PROFILE = 'PROFILE',
  TABS = 'TABS',
}

export type RootStackParamList = {
  [NAVIGATION_KEYS.WELCOME]: undefined;
  [NAVIGATION_KEYS.TABS]: undefined;
};

export type RootBottomTabsParamList = {
  [NAVIGATION_KEYS.HOME]: undefined;
  [NAVIGATION_KEYS.QUIZ]: undefined;
  [NAVIGATION_KEYS.INVENTORY]: undefined;
  [NAVIGATION_KEYS.PROFILE]: undefined;
};

export type HomeStackParamList = {
  [NAVIGATION_KEYS.HOME_MAIN]: undefined;
  [NAVIGATION_KEYS.HOME_GAME]: undefined;
  [NAVIGATION_KEYS.HOME_GALLERY]: { heading: string; gallery: string[] };
  [NAVIGATION_KEYS.HOME_COLLECTIONS]: undefined;
};

export type QuizStackParamList = {
  [NAVIGATION_KEYS.QUIZ_MAIN]: undefined;
  [NAVIGATION_KEYS.QUIZ_GAME]: undefined;
};
export type RootNavigation =
  NativeStackScreenProps<RootStackParamList>['navigation'];
