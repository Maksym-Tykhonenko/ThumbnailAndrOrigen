import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProfileSchema } from '~/shared/components/profile-form/profile.schema';
import {
  Gender,
  ProfileFormRequest,
} from '~/shared/components/profile-form/profile-form.type';
import { useProfileStore } from '~/shared/store/profile.store';
import { useContext, useEffect, useState } from 'react';
import { BottomSheetContext } from '~/shared/context/bottom-sheet.context';

type ProfileFormFields = {
  firstName: string;
  lastName: string;
  birthDate: string;
};
export const useProfile = () => {
  const { setUserData, resetUserData, user } = useProfileStore(
    (state) => state,
  );

  const { setOption } = useContext<BottomSheetContext>(BottomSheetContext);

  const { control, handleSubmit, watch, reset } = useForm<ProfileFormFields>({
    resolver: yupResolver(ProfileSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      birthdate: user.birthDate,
    },
  });

  useEffect(() => {
    reset({
      firstName: user.firstName,
      lastName: user.lastName,
      birthDate: user.birthDate,
    });
  }, [user]);

  const [gender, setGender] = useState<Gender>(user.gender);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    user.photoUri,
  );

  const onSubmit = (data: ProfileFormRequest): void => {
    setUserData({ ...data, gender, photoUri: selectedImage });
  };

  const handleReset = (): void => {
    resetUserData();
    setGender(Gender.UNSET);
    setSelectedImage('');
    setOption(Gender.UNSET);
  };

  const isSubmitDisabled = !(
    watch('firstName') &&
    watch('lastName') &&
    watch('birthDate')
  );

  return {
    control,
    handleSubmit,
    onSubmit,
    handleReset,
    isSubmitDisabled,
    setGender,
    gender,
    selectedImage,
    setSelectedImage,
  };
};
