import { Platform } from "react-native";

const isIOS = Platform.OS === 'ios';

export const cursiveFont = isIOS ? 'LavishyYours-Regular' : 'LavishlyYoursRegular';
export const deliusFont = isIOS ? 'DeliusSwashCaps-Regular' : 'DeliusSwashCapsRegular';
export const fleurDeLeahFont = isIOS ? 'FleurDeLeah-Regular' : 'FleurDeLeahRegular';
export const icebergFont = isIOS ? 'Iceberg-Regular' : 'IcebergRegular';
export const interFont = isIOS ? 'Inter-Regular' : 'InterRegular';
export const metalManiaFont = isIOS ? 'MetalMania-Regular' : 'MetalManiaRegular';
export const shadowsLightFont = isIOS ? 'ShadowsIntoLightTwo-Regular' : 'ShadowsIntoLightTwoRegular';

export const appFonts: { [key: string]: string; }  = {
  cursive: cursiveFont,
  delius: deliusFont,
  fleurDeLeah: fleurDeLeahFont,
  iceberg: icebergFont,
  inter: interFont,
  metal: metalManiaFont,
  shadows: shadowsLightFont
};

export const appFontsNames = [
  'cursive',
  'delius',
  'fleurDeLeah',
  'iceberg',
  'inter',
  'metal',
  'shadows'
];