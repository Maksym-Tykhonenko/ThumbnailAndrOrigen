import { Pressable, Text, View } from "react-native";
import { styles } from "~/shared/components/select/select.styles";
import { useContext, useEffect } from "react";
import { BottomSheetContext } from "~/shared/context/bottom-sheet.context";
import { Gender } from "~/shared/components/profile-form/profile-form.type";
import SelectArrowIcon from "~/../assets/icons/SelectArrowIcon.svg";

type SelectProps = {
  width?: number;
  title: string;
  selectedValue: Gender;
  onSelect: (option: Gender) => void;
};
export const Select = ({
  width,
  title,
  onSelect,
  selectedValue,
}: SelectProps) => {
  const { showDrawer, option } =
    useContext<BottomSheetContext>(BottomSheetContext);

  useEffect(() => {
    onSelect(option);
  }, [option]);

  return (
    <Pressable
      style={[styles.container, { width: width }]}
      onPress={showDrawer}
    >
      <Text style={styles.label}>{title}</Text>
      <View style={styles.select}>
        <Text style={styles.item}>{selectedValue || "Unset"}</Text>
        <SelectArrowIcon />
      </View>
    </Pressable>
  );
};
