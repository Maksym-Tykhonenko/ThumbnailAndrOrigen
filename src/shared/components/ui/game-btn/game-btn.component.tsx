import { Pressable, Text, View } from "react-native";
import { styles } from "~/shared/components/ui/game-btn/game-btn.styles";
import GameBtnIcon from "~/../assets/icons/GameBtnIcon.svg";

type GameBtnProps = {
  disabled: boolean;
  num: number;
  onPress: () => void;
};
export const GameBtn = ({ num, disabled, onPress }: GameBtnProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, disabled && styles.containerDisabled]}
    >
      {disabled ? (
        <View style={styles.btnDisabled}></View>
      ) : (
        <GameBtnIcon width={64} height={64} />
      )}

      <Text style={[styles.text, disabled && styles.textDisabled]}>{num}</Text>
    </Pressable>
  );
};
