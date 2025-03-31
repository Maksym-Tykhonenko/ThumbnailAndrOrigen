import { Image, ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '~/modules/screens/welcome/welcome.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '~/shared/styles/colors';
import BlinkLogo from '../../../../assets/icons/BlinkLogo.svg';
import { Button } from '~/shared/components/ui/button/button.component';
import { useGameStore } from '~/shared/store/game.store';

export const WelcomeScreen = () => {
  const setIsOpened = useGameStore((state) => state.setIsOpened);

  const handleStarted = () => {
    setIsOpened(true);
  };
{/**
   <BlinkLogo style={styles.logo} />
        <Image
          source={require('./../../../../assets/images/bubble.png')}
          style={styles.image}
        />
  <LinearGradient
      colors={COLORS.darkGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    ></LinearGradient>
    <View>
            <Text style={styles.heading}>Pop Balls, Beat the Clock!</Text>
            <Text style={styles.text}>
              Blink is a simple yet addictive arcade game that tests your speed
              and reflexes. Tap the right balls, avoid traps, and beat the clock
              to score big.{' '}
            </Text>
          </View>
  */}
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex:1}} source={require('../../../../assets/new/screen3.jpg')}>
        <SafeAreaView style={styles.outerContainer}>
       
        <View style={[styles.innerContainer, { paddingBottom: 20 }]}>
          
          <Button text="Get started" option="accent" onPress={handleStarted} />
        </View>
      </SafeAreaView>
      </ImageBackground>
    </View>
      
    
  );
};
