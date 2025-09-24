import { Platform } from "react-native";

const isIOS = Platform.OS === 'ios';

export const cursiveFont = isIOS ? 'LavishyYours-Regular' : 'LavishlyYoursRegular';