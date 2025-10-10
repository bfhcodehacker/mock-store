import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { MainStyles } from '../styles/MainStyles';
import { ViewStyle } from 'react-native';
import { useAppSelector } from '../app/hooks';

interface GradientWrapperProps {
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  containerStyle?: ViewStyle;
}

export const GradientWrapper = (props: GradientWrapperProps) => {
  const theme = useAppSelector(state => state.theme);
  const fColor = props.fromColor || theme.primaryColor || '#00008B';
  const tColor = props.toColor || theme.primaryEndColor || '#6e70f3ff'
  return (
    <LinearGradient style={[MainStyles.main, props.containerStyle]} colors={[fColor, tColor]}>
      {props.children}
    </LinearGradient>
  );
};