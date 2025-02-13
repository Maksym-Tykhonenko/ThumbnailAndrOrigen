import { Gender } from "~/shared/components/profile-form/profile-form.type";
import { createContext, RefObject, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

export interface BottomSheetContext {
  showDrawer: () => void;
  option: Gender;
  setOption: (content: Gender) => void;
}

export const BottomSheetContext = createContext<BottomSheetContext>({});

export const useBottomSheet = (
  bottomSheetRef: RefObject<BottomSheet>,
): BottomSheetContext => {
  const showDrawer = () => {
    bottomSheetRef.current?.expand();
  };

  const [option, setOption] = useState<Gender>();

  return {
    showDrawer,
    option,
    setOption,
  };
};
