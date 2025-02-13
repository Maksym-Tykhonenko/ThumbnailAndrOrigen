import { View } from "react-native";
import { Header } from "~/shared/components/header/header.component";
import { styles } from "~/modules/screens/profile/profile.styles";
import { ProfileForm } from "~/shared/components/profile-form/profile-form.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { LightContainer } from "~/shared/components/ui/light-container/light-container.component";

export const ProfileScreen = () => {
  const bottomPadding = useBottomTabBarHeight();

  return (
    <LightContainer>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { paddingBottom: bottomPadding }]}>
          <Header />

          <ProfileForm />
        </View>
      </KeyboardAwareScrollView>
    </LightContainer>
  );
};
