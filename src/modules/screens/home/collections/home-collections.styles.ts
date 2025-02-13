import { StyleSheet } from 'react-native';
import { FONTS } from '~/shared/styles/fonts.ts';
import { COLORS } from '~/shared/styles/colors.ts';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    alignItems: 'flex-start',
    borderRadius: 30,
  },
  collectionsContainer: {
    gap: 16,
    width: '100%',
    alignItems: 'center',
  },
  collection: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'flex-end',
  },
  heading: {
    fontFamily: FONTS.inter.medium,
    fontSize: 22,
    color: COLORS.white,
    paddingHorizontal: 32,
    paddingVertical: 28,
    zIndex: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    position: 'absolute',
    objectFit: 'cover',
  },
});
