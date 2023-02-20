import PageContainer from "../../components/UI/PageContainer";
import { Text, View } from "react-native";
import CustomButton from "../../components/UI/CustomButton";
import Input from "../../components/UI/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeEmail } from "../../store/userSlice/userActions";
import { emailRegx, passwordRegx } from "../../utils/regex";
import theme from "../../constants/theme";

const ChangeEmail = ({ navigation }) => {
  const dispatch = useDispatch();
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [oldEmailError, setOldEmailError] = useState("");
  const [newEmailError, setNewEmailError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = () => {
    const emails = {
      oldEmail: oldEmail.trim(),
      newEmail: newEmail.trim(),
    };

    setLoginError("");

    dispatch(changeEmail(emails))
      .unwrap()
      .then(() => {
        setNewEmail("");
        setOldEmail("");
        setLoginError("");
        navigation.navigate("Account");
      })
      .catch((err) => {
        setLoginError("Old email is not correct.");
      });
  };

  const handleOldEmailChange = (text) => {
    setOldEmail(text);

    if (text === "") {
      setOldEmailError("");
      return;
    }

    if (!emailRegx.test(text)) {
      setOldEmailError("You need to provide correct email.");
    } else {
      setOldEmailError("");
    }
  };

  const handleNewEmailChange = (text) => {
    setNewEmail(text);

    if (text === "") {
      setNewEmailError("");
      return;
    }

    if (!emailRegx.test(text)) {
      setNewEmailError("You need to provide correct email.");
    } else {
      setNewEmailError("");
    }
  };

  const handleCancel = () => {
    setOldEmail("");
    setNewEmail("");
    navigation.navigate("Account");
  };

  return (
    <PageContainer>
      <Text
        style={{
          fontSize: 32,
        }}
      >
        Change Email
      </Text>
      <Input
        isPassword={false}
        name='Old Email'
        placeholder='Old Email'
        onChangeText={handleOldEmailChange}
        value={oldEmail}
        error={oldEmailError}
      />
      <Input
        isPassword={false}
        name='New Email'
        placeholder='New Email'
        onChangeText={handleNewEmailChange}
        value={newEmail}
        error={newEmailError}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignSelf: "stretch",
          alignItems: "center",
          paddingVertical: 16,
          marginTop: 32,
        }}
      >
        <CustomButton
          title='Submit'
          onPress={handleSubmit}
          disabled={oldEmail.trim() === "" || newEmail.trim() === ""}
        />
        <CustomButton title='Cancel' onPress={handleCancel} />
      </View>
      {loginError && (
        <Text style={{ color: theme.YELLOW, marginTop: 8 }}>{loginError}</Text>
      )}
    </PageContainer>
  );
};

export default ChangeEmail;
