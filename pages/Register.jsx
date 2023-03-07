import PageContainer from "../components/UI/PageContainer";
import { Text } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ConstStyles } from "../constants/constStyles";
import Input from "../components/UI/Input";
import CustomButton from "../components/UI/CustomButton";
import { passwordRegx, emailRegx } from "../utils/regex";
import theme from "../constants/theme";
import { register } from "../store/userSlice/userActions";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();

  const isRegisterFalsy =
    Boolean(
      nameError ||
        surnameError ||
        emailError ||
        passwordError ||
        confirmPasswordError
    ) ||
    Boolean(
      email.trim() === "" ||
        password.trim() === "" ||
        name.trim() === "" ||
        surname.trim() === "" ||
        confirmPassword.trim() === ""
    );

  const handleOnSubmit = async () => {
    const userLogin = {
      name: name.trim(),
      surname: surname.trim(),
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    };

    setLoginError("");

    if (userLogin.email === "" || userLogin.password === "") {
      setLoginError("You need to set email and password");
      return;
    }

    dispatch(register(userLogin))
      .unwrap()
      .then(() => {})
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  const handleNameChange = (text) => {
    setName(text);

    if (text === "") {
      setNameError("");
      return;
    }

    if (text.indexOf(" ") > -1) {
      setNameError("Name can't contain spaces");
      return;
    }

    setNameError("");
  };

  const handleSurnameChange = (text) => {
    setSurname(text);

    if (text === "") {
      setSurnameError("");
      return;
    }

    if (text.indexOf(" ") > -1) {
      setSurnameError("Surname can't contain spaces");
      return;
    }

    setSurnameError("");
  };

  const handleEmailChange = (text) => {
    setEmail(text);

    if (text === "") {
      setEmailError("");
      return;
    }

    if (!emailRegx.test(text)) {
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

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);

    if (text === "") {
      setConfirmPasswordError("");
      return;
    }

    if (!passwordRegx.test(text)) {
      setConfirmPasswordError(
        "Confirm password need to have at least 8 characters, one letter, one number."
      );
      return;
    }

    if (password !== text) {
      console.log(password);
      console.log(confirmPassword);
      setConfirmPasswordError(
        "Password and confirm password need to be the same."
      );
      return;
    }

    setConfirmPasswordError("");
  };

  return (
    <PageContainer isScroll={true}>
      <Text style={ConstStyles.pageTitle}>
        Regis<Text style={ConstStyles.titleYellow}>ter</Text>
      </Text>
      <Input
        isPassword={false}
        name='Name'
        placeholder='Name'
        onChangeText={handleNameChange}
        value={name}
        error={nameError}
      />
      <Input
        isPassword={false}
        name='Surname'
        placeholder='Surname'
        onChangeText={handleSurnameChange}
        value={surname}
        error={surnameError}
      />
      <Input
        isPassword={false}
        name='Email'
        placeholder='Email'
        onChangeText={handleEmailChange}
        value={email}
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
      <Input
        isPassword={true}
        name='ConfirmPassword'
        placeholder='ConfirmPassword'
        onChangeText={handleConfirmPasswordChange}
        value={confirmPassword}
        error={confirmPasswordError}
      />
      {loginError && (
        <Text style={{ color: theme.YELLOW, marginBottom: 8 }}>
          {loginError}
        </Text>
      )}
      <CustomButton
        title='Register'
        onPress={handleOnSubmit}
        disabled={isRegisterFalsy}
      />
    </PageContainer>
  );
};

export default Register;
