import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useMemo } from "react";
import { HomeMainScreen } from "~/modules/screens/home/main/home-main.screen";
import {
  NAVIGATION_KEYS,
  RootBottomTabsParamList,
} from "~/modules/navigation/types/navigation.type";
import { QuizScreen } from "~/modules/screens/quiz/main/quiz-main.screen";
import { InventoryScreen } from "~/modules/screens/inventory/inventory.screen";
import { ProfileScreen } from "~/modules/screens/profile/profile.screen";
import { BOTTOM_NAVIGATOR_OPTIONS } from "~/modules/navigation/constants/screen-options";
import HomeIcon from "~/../assets/icons/HomeIcon.svg";
import QuizIcon from "~/../assets/icons/QuizIcon.svg";
import InventoryIcon from "~/../assets/icons/InventoryIcon.svg";
import ProfileIcon from "~/../assets/icons/ProfileIcon.svg";
import { QuizStack } from "~/modules/navigation/components/quiz-stack/quiz-stack";
import { HomeStack } from "~/modules/navigation/components/home-stack/home-stack";

const Tabs = createBottomTabNavigator<RootBottomTabsParamList>();
export const NavBottoms = () => {
  const screens = useMemo(() => {
    return (
      <>
        <Tabs.Screen
          name={NAVIGATION_KEYS.HOME}
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon stroke={color} width={24} height={24} />
            ),
            title: "Home",
          }}
        />
        <Tabs.Screen
          name={NAVIGATION_KEYS.QUIZ}
          component={QuizStack}
          options={{
            tabBarIcon: ({ color }) => (
              <QuizIcon stroke={color} width={24} height={24} />
            ),
            title: "Quiz",
          }}
        />
        <Tabs.Screen
          name={NAVIGATION_KEYS.INVENTORY}
          component={InventoryScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <InventoryIcon stroke={color} width={24} height={24} />
            ),
            title: "Inventory",
          }}
        />
        <Tabs.Screen
          name={NAVIGATION_KEYS.PROFILE}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <ProfileIcon stroke={color} width={24} height={24} />
            ),
            title: "Profile",
          }}
        />
      </>
    );
  }, []);
  return (
    <Tabs.Navigator screenOptions={BOTTOM_NAVIGATOR_OPTIONS}>
      {screens}
    </Tabs.Navigator>
  );
};
