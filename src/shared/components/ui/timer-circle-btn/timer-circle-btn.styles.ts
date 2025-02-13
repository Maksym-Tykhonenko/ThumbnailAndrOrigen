import { StyleSheet } from 'react-native';
import { COLORS } from '~/shared/styles/colors.ts';
import { FONTS } from '~/shared/styles/fonts.ts';

export const styles = StyleSheet.create({
  border: {
    width: 42,
    height: 42,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgColor: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.inter.medium,
  },
});
