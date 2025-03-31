import { Dimensions, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from '~/modules/screens/home/main/home-main.styles';
import { BonusComponent } from '~/shared/components/bonus/bonus.component';
import { GameBtn } from '~/shared/components/ui/game-btn/game-btn.component';
import EmojiIcon from '../../../../../assets/icons/EmojiIcon.svg';
import JoystickIcon from '../../../../../assets/icons/JoystickIcon.svg';
import PhotoIcon from '../../../../../assets/icons/PhotoIcon.svg';
import { Header } from '~/shared/components/header/header.component';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { LightContainer } from '~/shared/components/ui/light-container/light-container.component';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  HomeStackParamList,
  NAVIGATION_KEYS,
} from '~/modules/navigation/types/navigation.type';
import { useGameStore } from '~/shared/store/game.store.ts';
import { useEffect, useState } from 'react';
import { Alert } from '~/shared/components/ui/alert/alert.component.tsx';
import { Button } from '~/shared/components/ui/button/button.component.tsx';

export const HomeMainScreen = () => {
  const width = Dimensions.get('window').width / 2 - 32;

  const width2 = width / 2 - 4;
  const bottomPadding = useBottomTabBarHeight();
  const score = useGameStore((state) => state.score);
  const [playEnabled, setPlayEnabled] = useState<boolean>(true);

  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const handlePlay = () => {
    if (score < 15) {
      setPlayEnabled(false);
    } else {
      setPlayEnabled(true);
      navigation.navigate(NAVIGATION_KEYS.HOME_GAME);
    }
  };
  const paddingBottom = useBottomTabBarHeight();
  return (
    <View style={{flex:1}}>
      <ImageBackground  style={{flex:1}} source={require('../../../../../assets/new/screen3.jpg')}>
        
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { paddingBottom: bottomPadding, marginHorizontal:10 }]}>
          <Header />
          <View style={[styles.contentContainer, { paddingBottom }]}>
            <BonusComponent />
            <View style={styles.gameContainer}>
              <Text style={styles.gameHeading}>Game levels</Text>
              <View style={styles.gameBtnContainer}>
                <GameBtn disabled={false} num={1} onPress={handlePlay} />
                <GameBtn disabled={true} num={2} onPress={() => {}} />
                <GameBtn disabled={true} num={3} onPress={() => {}} />
                <GameBtn disabled={true} num={4} onPress={() => {}} />
                <GameBtn disabled={true} num={5} onPress={() => {}} />
              </View>
            </View>
            <View style={styles.benefitsBtns}>
              <View style={styles.benefitsContainer}>
                <View
                  style={[styles.benefit, { width: width2, height: width }]}
                >
                  <View style={styles.iconContainer}>
                    <EmojiIcon />
                  </View>
                  <Text style={styles.benefitText}>Share together!</Text>
                </View>
                <View
                  style={[styles.benefit, { width: width2, height: width }]}
                >
                  <View style={styles.iconContainer}>
                    <JoystickIcon />
                  </View>
                  <Text style={styles.benefitText}>Fun Addictive!</Text>
                </View>
              </View>
              <Pressable
                onPress={() =>
                  navigation.navigate(NAVIGATION_KEYS.HOME_COLLECTIONS)
                }
                style={[styles.benefit, { width: width, height: width }]}
              >
                <View style={styles.iconContainer}>
                  <PhotoIcon />
                </View>
                <View style={styles.photoText}>
                  <Text style={styles.benefitText}>Photo Album</Text>
                  <Text style={styles.photoParagraph}>
                    Discover a collection of colorful balloon moments!
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>

        <Alert visible={!playEnabled}>
          <View>
            <Text>
              Your score is {score}, you need to have at least 15 points to play
            </Text>
            <Button
              text="Close"
              option="accent"
              onPress={() => setPlayEnabled(true)}
            />
          </View>
        </Alert>
      </ScrollView>
    
      </ImageBackground>
    </View>
    
  );
};
