import { Dimensions, Pressable, Text, View } from 'react-native';
import { styles } from '~/shared/components/profile-form/profile-form.styles';
import { Button } from '~/shared/components/ui/button/button.component';
import ReloadIcon from '~/../assets/icons/ReloadIcon.svg';
import { COLORS } from '~/shared/styles/colors';
import EditIcon from '~/../assets/icons/EditIcon.svg';
import SupportIcon from '~/../assets/icons/SupportIcon.svg';
import { Controller } from 'react-hook-form';
import { Input } from '~/shared/components/input/input.component';
import { useProfile } from '~/shared/hooks/useProfile';
import { Select } from '~/shared/components/select/select.component';
import { Gender } from '~/shared/components/profile-form/profile-form.type';
import { useProfileStore } from '~/shared/store/profile.store';
import { useState } from 'react';
import { ImagePickerComponent } from '~/shared/components/image-picker/image-picker.component';
import { Alert } from '~/shared/components/ui/alert/alert.component';

export const ProfileForm = () => {
  const {
    control,
    handleReset,
    handleSubmit,
    onSubmit,
    isSubmitDisabled,
    gender,
    setGender,
    setSelectedImage,
    selectedImage,
  } = useProfile();
  const inputWidth = Dimensions.get('window').width / 2 - 32;
  const user = useProfileStore((state) => state.user);

  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const handleSelect = (value: Gender) => {
    setGender(value);
  };

  const handleResetPress = () => {
    setIsAlertVisible(true);
  };

  const onReset = () => {
    handleReset();
    setIsAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      {/*<Text style={styles.text}>Information Saved!</Text>*/}
      <ImagePickerComponent
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <View style={styles.formContainer}>
        <View style={styles.inputsContentContainer}>
          <View style={styles.inputsContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input label="First Name" value={value} onChange={onChange} />
              )}
              name="firstName"
            />
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input label="Last Name" value={value} onChange={onChange} />
              )}
              name="lastName"
            />

            
          </View>
          <View style={styles.inputsBtnContainer}>
            <Pressable
              onPress={() => {}}
              style={({ pressed }) => [
                pressed && styles.pressed,
                styles.underlineBtn,
              ]}
            >
              <EditIcon width={24} height={24} stroke={COLORS.white} />
              <Text style={styles.btnText}>Edit data</Text>
            </Pressable>
            <Pressable
              onPress={() => {}}
              style={({ pressed }) => [
                pressed && styles.pressed,
                styles.underlineBtn,
              ]}
            >
              <SupportIcon width={24} height={24} stroke={COLORS.white} />
              <Text style={styles.btnText}>Support</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            text="Save date"
            option="accent"
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitDisabled}
          />
          <Button
            text="Reset"
            option="opacity"
            onPress={handleResetPress}
            Icon={<ReloadIcon width={21} height={21} stroke={COLORS.white} />}
          />
        </View>
      </View>
      <Alert visible={isAlertVisible}>
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>
            Are you sure that you want to reset all data?
          </Text>
          <View style={styles.alertBtnContainer}>
            <Button text="Reset" option="accent" onPress={onReset} />
            <Button
              containerStyles={{
                borderColor: COLORS.activeBtn,
                borderWidth: 2,
              }}
              text="Cancel"
              option="white"
              onPress={() => setIsAlertVisible(false)}
            />
          </View>
        </View>
      </Alert>
    </View>
  );
};
