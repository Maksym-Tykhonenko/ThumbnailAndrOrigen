import { StyleSheet } from 'react-native';
import { FONTS } from '~/shared/styles/fonts';
import { COLORS } from '~/shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 40,
    flex: 1,
  },
  contentContainer: {
    gap: 28,
    width: '100%',
  },
  gameContainer: {
    gap: 16,
  },
  gameHeading: {
    fontFamily: FONTS.inter.regular,
    fontSize: 17,
    color: COLORS.white,
  },
  gameBtnContainer: {
    width: '100%',
    paddingHorizontal: 8,
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  benefitsContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  benefit: {
    backgroundColor: COLORS.lightPurple,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 62,
    height: 62,
  },
  benefitText: {
    fontFamily: FONTS.inter.medium,
    color: COLORS.black,
    fontSize: 14,
    textAlign: 'center',
  },
  benefitsBtns: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  photoText: {
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  photoParagraph: {
    textAlign: 'center',
    fontFamily: FONTS.inter.regular,
    fontSize: 11,
    color: 'rgba(20,20,20,0.75)',
  },
});
