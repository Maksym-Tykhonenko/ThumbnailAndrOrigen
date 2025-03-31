import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNav } from '../navigation/components/root-nav/root-nav';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  BottomSheetContext,
  useBottomSheet,
} from '~/shared/context/bottom-sheet.context';
import { OptionsDrawer } from '~/shared/components/options-drawer/options-drawer.component';

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const drawer = useBottomSheet(bottomSheetRef);

  ///////// Louder
  const [louderIsEnded, setLouderIsEnded] = useState(false);
  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 7500,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 8000);
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        {!louderIsEnded ? (
          <View
            style={{
              position: 'relative',
              flex: 1,
              //backgroundColor: 'rgba(0,0,0)',
            }}>
            <Animated.Image
              source={require('../../../assets/new/screen1.png')}
              style={{
                //...props.style,
                opacity: appearingAnim,
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
            <Animated.Image
              source={require('../../../assets/new/screen2.jpg')}
              style={{
                //...props.style,
                opacity: appearingSecondAnim,
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            />
          </View>
        ): (
     <BottomSheetContext.Provider value={drawer}>
          <RootNav />
          <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={['10%', '20%']}
            enablePanDownToClose
          >
            <OptionsDrawer />
          </BottomSheet>
        </BottomSheetContext.Provider>       
)}

        
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
