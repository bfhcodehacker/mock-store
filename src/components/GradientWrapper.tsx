import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { MainStyles } from '../styles/MainStyles';

interface GradientWrapperProps {
  children: React.ReactNode;
  fromColor?: string;
  toColor?: string;
}

export const GradientWrapper = (props: GradientWrapperProps) => {
  const fColor = props.fromColor || '#00008B';
  const tColor = props.toColor || '#6e70f3ff'
  return (
    <LinearGradient style={MainStyles.main} colors={[fColor, tColor]}>
      {props.children}
    </LinearGradient>
  );
};