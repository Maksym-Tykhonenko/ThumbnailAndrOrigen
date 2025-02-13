import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { LightContainer } from '~/shared/components/ui/light-container/light-container.component.tsx';
import { Header } from '~/shared/components/header/header.component.tsx';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  HomeStackParamList,
  NAVIGATION_KEYS,
} from '~/modules/navigation/types/navigation.type.ts';
import { styles } from '~/modules/screens/home/gallery/home-gallery.styles.ts';
import { RouteProp } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

type HomeGalleryProps = {
  navigation: NativeStackScreenProps<
    HomeStackParamList,
    NAVIGATION_KEYS.HOME_GALLERY
  >;
  route: RouteProp<HomeStackParamList, NAVIGATION_KEYS.HOME_COLLECTIONS>;
};
export const HomeGalleryScreen = ({ navigation, route }: HomeGalleryProps) => {
  const data = route.params;
  const width = Dimensions.get('window').width / 2 - 32;
  const paddingBottom = useBottomTabBarHeight();
  return (
    <LightContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { paddingBottom }]}>
          <Header logo={false} goBack={() => navigation.goBack()} />
          <View style={styles.galleryContainer}>
            <Text style={styles.heading}>{data.heading}</Text>
            {data && (
              <FlatList
                scrollEnabled={false}
                data={data?.gallery}
                numColumns={2}
                contentContainerStyle={{ gap: 16 }}
                columnWrapperStyle={{ gap: 16 }}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Image
                    source={{ uri: item }}
                    style={[styles.image, { width }]}
                  />
                )}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </LightContainer>
  );
};
