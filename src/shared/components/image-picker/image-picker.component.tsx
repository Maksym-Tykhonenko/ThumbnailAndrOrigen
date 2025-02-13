import { Pressable, View, Alert, Image } from 'react-native';
import { styles } from '~/shared/components/image-picker/image-picker.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '~/shared/styles/colors';
import EditBtnIcon from '~/../assets/icons/EditBtnIcon.svg';
import ProfileImageIcon from '~/../assets/icons/ProfileImageIcon.svg';
import * as ImagePicker from 'expo-image-picker';

type ImagePickerProps = {
  selectedImage: string | null;
  setSelectedImage: (img: string) => void;
};

export const ImagePickerComponent = ({
  selectedImage,
  setSelectedImage,
}: ImagePickerProps) => {
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
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      {selectedImage ? (
        <Image style={styles.imageContainer} source={{ uri: selectedImage }} />
      ) : (
        <LinearGradient
          colors={COLORS.darkGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.imageContainer}
        >
          <ProfileImageIcon width={57} height={57} stroke={COLORS.white} />
        </LinearGradient>
      )}
      <Pressable style={styles.editBtn} onPress={pickImage}>
        <EditBtnIcon width={34} height={34} />
      </Pressable>
    </View>
  );
};
