import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNav } from '../navigation/components/root-nav/root-nav';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {
  BottomSheetContext,
  useBottomSheet,
} from '~/shared/context/bottom-sheet.context';
import { OptionsDrawer } from '~/shared/components/options-drawer/options-drawer.component';
import { useRef } from 'react';

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const drawer = useBottomSheet(bottomSheetRef);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
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
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
