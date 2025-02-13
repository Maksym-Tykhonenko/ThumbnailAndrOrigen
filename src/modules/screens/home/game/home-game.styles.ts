import { StyleSheet } from 'react-native';
import { FONTS } from '~/shared/styles/fonts.ts';
import { COLORS } from '~/shared/styles/colors.ts';
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    gap: 40,
    flex: 1,
  },
  textContainer: {
    width: '100%',
    maxWidth: 337,
    gap: 12,
    alignItems: 'center',
  },
  heading: {
    fontFamily: FONTS.openSans.medium,
    fontSize: 32,
    textAlign: 'center',
    color: COLORS.white,
  },
  text: {
    fontFamily: FONTS.inter.regular,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
  },
  alertContainer: {
    width: '100%',
    gap: 25,
    alignItems: 'center',
  },
  alertTextContainer: {
    width: '100%',
    gap: 12,
    alignItems: 'center',
  },
  alertHeading: {
    fontFamily: FONTS.openSans.medium,
    fontSize: 24,
    color: COLORS.black,
    textAlign: 'center',
  },
  alertText: {
    color: 'rgba(20,20,20,0.75)',
    fontFamily: FONTS.inter.regular,
    fontSize: 16,
    textAlign: 'center',
  },
  prizeContainer: {
    backgroundColor: 'rgba(159,4,123,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
