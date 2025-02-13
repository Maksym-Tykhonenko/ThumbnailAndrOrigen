import { StyleSheet } from 'react-native';
import { FONTS } from '~/shared/styles/fonts';
import { COLORS } from '~/shared/styles/colors';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 50,
    gap: 10,
    flexDirection: 'row',
  },
  text: {
    fontFamily: FONTS.inter.semiBold,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
  accentBtn: {
    backgroundColor: COLORS.activeBtn,
  },
  accentText: {
    color: COLORS.activeBtn,
  },
  whiteBtn: {
    backgroundColor: COLORS.white,
  },
  whiteText: {
    color: COLORS.white,
  },
  opacityBtn: {
    backgroundColor: 'rgba(246,246,246,0.2)',
    borderColor: COLORS.white,
    borderWidth: 2,
  },
});
