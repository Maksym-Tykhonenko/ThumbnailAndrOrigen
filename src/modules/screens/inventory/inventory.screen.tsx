import { Dimensions, FlatList, ScrollView, Text, View,ImageBackground } from "react-native";
import { LightContainer } from "~/shared/components/ui/light-container/light-container.component";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Header } from "~/shared/components/header/header.component";
import { styles } from "~/modules/screens/inventory/inventory.styles";
import OrangeBalloon from "~/../assets/icons/OrangeBalloon.svg";
import WhiteBalloon from "~/../assets/icons/WhiteBalloon.svg";
import BlueBalloon from "~/../assets/icons/BlueBalloon.svg";
import PinkBalloon from "~/../assets/icons/PinkBalloon.svg";
import GrayBalloon from "~/../assets/icons/GrayBalloon.svg";
import YellowBalloon from "~/../assets/icons/YellowBalloon.svg";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "~/shared/styles/colors";
import { BlurView } from "expo-blur";
import LockIcon from "~/../assets/icons/LockIcon.svg";

const DUMMY_INVENTORY_DATA = [
  {
    id: 1,
    Icon: <OrangeBalloon />,
    isOpened: true,
  },
  {
    id: 2,
    Icon: <WhiteBalloon />,
    isOpened: true,
  },
  {
    id: 3,
    Icon: <BlueBalloon />,
    isOpened: true,
  },
  {
    id: 4,
    Icon: <PinkBalloon />,
    isOpened: false,
  },
  {
    id: 5,
    Icon: <GrayBalloon />,
    isOpened: false,
  },
  {
    id: 6,
    Icon: <YellowBalloon />,
    isOpened: false,
  },
];

type InventoryItemProps = {
  Icon: React.ReactNode;
  isOpened: boolean;
};
const InventoryItem = ({ Icon, isOpened }: InventoryItemProps) => {
  const width = Dimensions.get("window").width / 2 - 32;
  
  return (
    <LinearGradient
      colors={COLORS.darkGradient}
      style={[styles.itemContainer, { width: width }]}
      start={{  }}
      end={{  }}
    >
      {!isOpened && <BlurView intensity={20} style={styles.blur} />}
      {isOpened ? Icon : <LockIcon />}
    </LinearGradient>
  );
};

export const InventoryScreen = () => {
  const bottomPadding = useBottomTabBarHeight();
  return (
    <View style={{flex:1}}>
          <ImageBackground  style={{flex:1}} source={require('../../../../assets/new/screen3.jpg')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { paddingBottom: bottomPadding }]}>
          <Header />

          <View style={styles.inventory}>
            <Text style={styles.heading}>Collect all the items</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              contentContainerStyle={{ gap: 16 }}
              columnWrapperStyle={{ gap: 16 }}
              numColumns={2}
              data={DUMMY_INVENTORY_DATA}
              renderItem={({ item }) => (
                <InventoryItem Icon={item.Icon} isOpened={item.isOpened} />
              )}
            />
          </View>
        </View>
      </ScrollView>
      </ImageBackground>
      </View>
  );
};
