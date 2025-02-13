import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Gender } from "~/shared/components/profile-form/profile-form.type";
import { Pressable, Text } from "react-native";
import { useContext } from "react";
import { BottomSheetContext } from "~/shared/context/bottom-sheet.context";
import { styles } from "~/shared/components/options-drawer/options-drawer.styles";

type GenderBtnProps = {
  gender: Gender;
};
const GenderBtn = ({ gender }: GenderBtnProps) => {
  const { setOption } = useContext<BottomSheetContext>(BottomSheetContext);

  return (
    <Pressable onPress={() => setOption(gender)}>
      <Text style={styles.text}>{gender}</Text>
    </Pressable>
  );
};
export const OptionsDrawer = () => {
  return (
    <BottomSheetView style={styles.container}>
      <GenderBtn gender={Gender.UNSET} />
      <GenderBtn gender={Gender.MALE} />
      <GenderBtn gender={Gender.FEMALE} />
    </BottomSheetView>
  );
};
