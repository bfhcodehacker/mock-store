import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form"
import { GradientWrapper } from "../components/GradientWrapper";
import { styles } from '../styles/screens/SignIn';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { signIn } from "../reducers/accountData";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AccountStackParamList } from "../stacks/AccountStack";
import { Checkbox } from "../components/Checkbox";

interface Inputs {
  username: string;
  password: string;
}

export const SignInScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AccountStackParamList>>();
  const dispatch = useAppDispatch();
  const signInStatus = useAppSelector(state => state.account.signInStatus);
  const isLoggedIn = useAppSelector(state => state.account.isLoggedIn);
  const theme = useAppSelector(state => state.theme);
  const [ rememberMe, setRememberMe ] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.goBack();
    }
  }, [isLoggedIn]);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = (data: Inputs) => {
    dispatch(signIn({
      username: data.username,
      password: data.password,
      savePassword: rememberMe
    }));
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <GradientWrapper>
      <Text style={styles.header}>Please sign in to access your account</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{ required: true, maxLength: 50 }}
          render={({ field: { onChange, value }}) => (
            <TextInput
              placeholder="Username"
              placeholderTextColor={'#636363'}
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
            />
          )}
          name='username'
        />
        {errors.username && <Text style={styles.errorText}>Username is required</Text>}
        <Controller
          control={control}
          rules={{ required: true, maxLength: 50 }}
          render={({ field: { onChange, value }}) => (
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#636363'}
              onChangeText={onChange}
              value={value}
              style={styles.textInput}
            />
          )}
          name='password'
        />
        {errors.password && <Text style={styles.errorText}>Password is required</Text>}

        <View style={styles.checkboxContainer}>
          <Checkbox toggleChecked={toggleRememberMe} isChecked={rememberMe} />
          <Text style={styles.rememberMeText}>Save Login Information</Text>
        </View>

        <View style={styles.statusBox}>
          {signInStatus === 'loading' && <ActivityIndicator size='large' />}
          {signInStatus === 'failed' && (
            <Text style={styles.signInError}>
              There was an error signing into your account. Please try again.
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={[styles.submitBtnText, theme.primaryFont, { backgroundColor: theme.primaryColor}]}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </GradientWrapper>
  );
}