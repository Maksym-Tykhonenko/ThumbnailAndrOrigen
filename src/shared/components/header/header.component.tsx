import { styles } from '~/shared/components/header/header.styles';
import BlinkLogo from '../../../../assets/icons/BlinkLogo.svg';
import { OutlineBtn } from '~/shared/components/ui/outline-btn/outline-btn.component';
import BalloonIcon from '../../../../assets/icons/BalloonIcon.svg';
import { View } from 'react-native';
import { useGameStore } from '~/shared/store/game.store';
import BackIcon from '~/../assets/icons/BackIcon.svg';
import TimerIcon from '~/../assets/icons/TimerIcon.svg';

type HeaderProps = {
  score?: boolean;
  timer?: boolean;
  timeLeft?: string;
  logo?: boolean;
  goBack?: () => void;
};
export const Header = ({
  logo = true,
  timer = false,
  timeLeft = 60,
  score = true,
  goBack,
}: HeaderProps) => {
  const scoreCount = useGameStore((state) => state.score);

  return (
    <View style={styles.container}>
      {logo ? (
        <BlinkLogo />
      ) : (
        <OutlineBtn
          Icon={<BackIcon width={10} height={18} />}
          disabled={false}
          onPress={goBack}
        />
      )}
      <View style={styles.rightContainer}>
        {timer && (
          <OutlineBtn
            Icon={<TimerIcon width={24} height={24} />}
            text={timeLeft === '60' ? '1min' : timeLeft}
          />
        )}

        {score && (
          <OutlineBtn
            text={scoreCount.toString()}
            Icon={<BalloonIcon width={24} height={24} />}
          />
        )}
      </View>
    </View>
  );
};
