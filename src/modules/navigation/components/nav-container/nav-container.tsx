import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { FunctionComponent } from "react";

type NavContainerProps = {
  children: React.ReactNode;
};
export const NavContainer: FunctionComponent<NavContainerProps> = ({
  children,
}: NavContainerProps) => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>{children}</NavigationContainer>
    </>
  );
};
