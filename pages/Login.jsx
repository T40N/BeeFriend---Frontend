import PageContainer from "../components/UI/PageContainer";
import { Text, StyleSheet } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice/userActions";
import Input from "../components/UI/Input";
import CustomButton from "../components/UI/CustomButton";
import theme from "../constants/theme";
import { emailRegx, passwordRegx } from "../utils/regex";
import { ConstStyles } from "../constants/constStyles";

const Login = ({ navigator }) => {
  const [email, setEmail] = useState(""); // stan komponentowy określający stan pola email formularza
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch();

  const isRegisterFalsy =
    Boolean(emailError || passwordError) ||
    Boolean(email.trim() === "" || password.trim() === "");

  const handleOnSubmit = async () => {
    setLoginError("");

    if (email.trim() === "" || password.trim() === "") {
      setLoginError("You need to set email and password");
      return;
    }

    const userLogin = {
      email: email.trim(),
      password: password.trim(),
    };

    dispatch(login(userLogin))
      .unwrap()
      .then(() => {})
      .catch((err) => {
        setLoginError("Can't find account check your credentials.");
      });
  };

  const handleEmailChange = (text) => {
    setEmail(text); // zmiana stanu po każdym wywołaniu handleEmailChange

    if (text === "") {
      setEmailError("");
      return;
    }

    if (!emailRegx.test(text)) {
      console.log(emailRegx.test(text));
      setEmailError("You need to provide correct email.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);

    if (text === "") {
      setPasswordError("");
      return;
    }

    if (!passwordRegx.test(text)) {
      setPasswordError(
        "Password need to have at least 8 characters, one letter, one number."
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <PageContainer>
      <Text style={ConstStyles.pageTitle}>
        Log<Text style={ConstStyles.titleYellow}>in</Text>
      </Text>
      <Input
        isPassword={false}
        name='Email'
        placeholder='Email'
        onChangeText={handleEmailChange} // wywołanie funkcji po każdej zmianie pola email
        value={email} // przypisanie wartości stanu do wartości pola, co pozwala uzyskać
        // synchronizowanie stanu oraz wartości pola formularza
        error={emailError}
      />
      <Input
        isPassword={true}
        name='Password'
        placeholder='Password'
        onChangeText={handlePasswordChange}
        value={password}
        error={passwordError}
      />
      {loginError && (
        <Text style={{ color: theme.YELLOW, marginBottom: 8 }}>
          {loginError}
        </Text>
      )}
      <CustomButton
        title='Login'
        onPress={handleOnSubmit}
        disabled={isRegisterFalsy}
      />
    </PageContainer>
  );
};

export default Login;
