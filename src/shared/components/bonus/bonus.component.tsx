import { FlatList, Text, View } from 'react-native';
import { Button } from '~/shared/components/ui/button/button.component';
import { styles } from '~/shared/components/bonus/bonus.styles';
import BalloonIcon from '~/../assets/icons/BalloonIcon.svg';
import { useEffect, useRef } from 'react';

const DUMMY_BONUS_DATA = [
  {
    id: 1,
    bonus: 5,
    complete: true,
    current: false,
  },
  {
    id: 2,
    bonus: 10,
    complete: true,
    current: false,
  },
  {
    id: 3,
    bonus: 15,
    complete: true,
    current: false,
  },
  {
    id: 4,
    bonus: 20,
    complete: true,
    current: false,
  },
  {
    id: 5,
    bonus: 25,
    complete: false,
    current: true,
  },
  {
    id: 6,
    bonus: 30,
    complete: false,
    current: false,
  },
  {
    id: 7,
    bonus: 35,
    complete: false,
    current: false,
  },
  {
    id: 8,
    bonus: 40,
    complete: false,
    current: false,
  },
  {
    id: 9,
    bonus: 45,
    complete: false,
    current: false,
  },
  {
    id: 10,
    bonus: 50,
    complete: false,
    current: false,
  },
];
type BonusProps = {
  bonus: number;
  complete: boolean;
  current: boolean;
};

const Bonus = ({ bonus, complete, current }: BonusProps) => {
  return (
    <View
      style={[
        styles.bonusItemContainer,
        complete && styles.complete,
        current && styles.current,
        !current && !complete && (styles.current, styles.disabled),
      ]}
    >
      <BalloonIcon width={24} height={24} />
      <Text style={styles.bonusText}>+{bonus}</Text>
    </View>
  );
};

export const BonusComponent = () => {
  const flatListRef = useRef<FlatList>(null);

  const currentIndex = DUMMY_BONUS_DATA.findIndex((item) => item.current);

  useEffect(() => {
    if (currentIndex !== -1) {
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          index: currentIndex,
          animated: true,
          viewPosition: 0.5,
        });
      }, 500);
    }
  }, []);

  const handleCollect = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>5 days on streak!</Text>

      <FlatList
        ref={flatListRef}
        style={styles.bonusContainer}
        horizontal={true}
        data={DUMMY_BONUS_DATA}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <Bonus
            bonus={item.item.bonus}
            current={item.item.current}
            complete={item.item.complete}
          />
        )}
        getItemLayout={(_, index) => ({
          length: 77,
          offset: 77 * index + 19,
          index,
        })}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.btnContainer}>
        <Button text="Collect Reward" option="white" onPress={handleCollect} />
      </View>
    </View>
  );
};
