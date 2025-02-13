import { StyleSheet } from 'react-native';
import { FONTS } from '~/shared/styles/fonts.ts';
import { COLORS } from '~/shared/styles/colors.ts';

export const styles = StyleSheet.create({
  container: {
    gap: 40,
    flex: 1,
  },
  galleryContainer: {
    gap: 32,
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontFamily: FONTS.openSans.medium,
    fontSize: 32,
    color: COLORS.white,
  },
  image: {
    height: 230,
    objectFit: 'cover',
    borderRadius: 150,
  },
});
