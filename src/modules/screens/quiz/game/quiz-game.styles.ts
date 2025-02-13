import { StyleSheet } from 'react-native';
import { COLORS } from '~/shared/styles/colors';
import { FONTS } from '~/shared/styles/fonts.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: '100%',
    paddingVertical: 32,
    paddingHorizontal: 24,
    gap: 36,
    borderRadius: 30,
  },
  question: {
    fontFamily: FONTS.inter.regular,
    color: COLORS.black,
    fontSize: 24,
  },
  carouselContainer: {
    width: '100%',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1.5,
    borderColor: COLORS.gray,
    paddingHorizontal: 16,
    height: 66,
    justifyContent: 'flex-start',
    borderRadius: 20,
  },
  optionsContainer: {
    gap: 20,
    width: '100%',
    alignItems: 'center',
  },
  correct: {
    color: COLORS.white,
  },
  incorrect: {
    borderColor: '#962020',
  },
  optionText: {
    fontFamily: FONTS.inter.regular,
    fontSize: 16,
    color: COLORS.black,
  },
  header: {
    gap: 8,
    width: '100%',
    alignItems: 'flex-start',
  },
  category: {
    color: COLORS.gray,
    fontFamily: FONTS.inter.regular,
    fontSize: 14,
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 510,
  },
  alertContainer: {
    gap: 25,
    width: '100%',
    alignItems: 'center',
  },
  textContainer: {
    gap: 12,
    width: '100%',
  },
  alertHeading: {
    fontFamily: FONTS.openSans.medium,
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.black,
  },
  alertText: {
    fontFamily: FONTS.inter.regular,
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(20,20,20,0.75)',
  },
  scoreContainer: {
    width: 82,
    height: 90,
    backgroundColor: COLORS.darkPurple,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 15,
  },
  scoreText: {
    fontFamily: FONTS.inter.semiBold,
    fontSize: 12,
    color: COLORS.white,
  },
});
