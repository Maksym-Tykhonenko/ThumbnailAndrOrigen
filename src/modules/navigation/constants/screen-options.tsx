import { COLORS } from "~/shared/styles/colors";
import { TabLabel } from "~/shared/components/ui/tab-label/tab-label.component";

export const STACK_SCREEN_OPTIONS = {
  headerShown: false,
};

export const BOTTOM_NAVIGATOR_OPTIONS = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: COLORS.bgTab,
    borderTopWidth: 1.5,
    borderColor: COLORS.white,
    height: 83,
    position: "absolute",
    bottom: 0,
    zIndex: 10,
  },
  tabBarLabel: ({ focused, color, children }) => (
    <TabLabel focused={focused} color={color}>
      {children}
    </TabLabel>
  ),
  tabBarActiveTintColor: COLORS.activeBtn,
  tabBarInactiveTintColor: COLORS.inactiveTab,
};
