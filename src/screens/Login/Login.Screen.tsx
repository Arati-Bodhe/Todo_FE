import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./Style";
import { TextConstant } from "../../constants/text";
import { Loader, TextInput } from "../../components";
import { color } from "../../constants/color";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../redux/slices/LogIn.Slice";
import { screenNames } from "../../constants/ScreenName";

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginSelector = useSelector(state => state.login)
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState('')
  const onChangeEmail = (data: string) => {
    setUser({ ...user, email: data })
  }
  const onChangePassword = (data: string) => {
    setUser({ ...user, password: data })
  }

  const onLogin = () => {
    if (!(user.email || user.password)) {
      console.log("error ");
      setError("All fields are required");
    } else {
      setError('');
      console.log("onlogin", user);
      dispatch(logInUser(user));
    }
  }

  useEffect(() => {
    if (loginSelector.logInSuccess == true) {
      navigation.navigate(screenNames.TODO_LIST)
    }
  }, [loginSelector.loading])
  return (
    <Loader isLoading={loginSelector.loading}>
      <View style={styles.container}>
        <Text style={styles.topHead}>{TextConstant.LOG_IN}</Text>
        <TextInput
          placeholder="Email"
          value={user.email}
          onChangeVal={onChangeEmail}
        />
        <TextInput
          placeholder="Password"
          value={user.password}
          onChangeVal={onChangePassword}
        />
        <TouchableOpacity onPress={() => { onLogin() }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[color.PURPLE, color.PINK, color.CORAL]}
            style={styles.buttonView}
          >
            <Text style={styles.btnText}>SIGN IN</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Loader>
  )
}