import { Alert, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { LightContainer } from '~/shared/components/ui/light-container/light-container.component.tsx';
import { Header } from '~/shared/components/header/header.component.tsx';
import { styles } from '~/modules/screens/home/collections/home-collections.styles.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  HomeStackParamList,
  NAVIGATION_KEYS,
} from '~/modules/navigation/types/navigation.type.ts';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '~/shared/styles/colors.ts';
import { ICollection } from '~/modules/screens/home/home.type.ts';
import { useProfileStore } from '~/shared/store/profile.store.ts';
import * as ImagePicker from 'expo-image-picker';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

type HomeCollectionsScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  NAVIGATION_KEYS.HOME_COLLECTIONS
>;
export const HomeCollectionsScreen = ({
  navigation,
}: HomeCollectionsScreenProps) => {
  const { gallery, addImage } = useProfileStore((state) => state);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'You need to allow access to your photos.',
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      addImage(result.assets[0].uri);
    }
  };
  const handleNavigate = (collection: ICollection) => {
    navigation.navigate(NAVIGATION_KEYS.HOME_GALLERY, {
      heading: collection.heading,
      gallery: collection.gallery,
    });
  };
  const paddingBottom = useBottomTabBarHeight();

  
  return (
    <LightContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { paddingBottom }]}>
          <Header goBack={() => navigation.goBack()} logo={false} />
          <View style={styles.collectionsContainer}>
            <Pressable style={styles.collection} onPress={pickImage}>
              <LinearGradient
                colors={COLORS.darkGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <Text style={styles.heading}>+Add new collection</Text>
              </LinearGradient>
            </Pressable>
            {gallery.map((item, index) => (
              <Pressable
                style={styles.collection}
                key={index}
                onPress={() => handleNavigate(item)}
              >
                <Image source={{ uri: item.gallery[0] }} style={styles.image} />
                <Text style={styles.heading}>{item.heading}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </LightContainer>
  );
};
