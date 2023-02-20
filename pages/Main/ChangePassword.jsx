import PageContainer from "../../components/UI/PageContainer";
import { Text, View } from "react-native";
import CustomButton from "../../components/UI/CustomButton";
import Input from "../../components/UI/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../store/userSlice/userActions";
import { passwordRegx } from "../../utils/regex";
import theme from "../../constants/theme";

const ChangePassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = () => {
    const passwords = {
      oldPassword: oldPassword.trim(),
      newPassword: newPassword.trim(),
    };

    setLoginError("");

    dispatch(changePassword(passwords))
      .unwrap()
      .then(() => {
        setNewPassword("");
        setOldPassword("");
        setLoginError("");
        navigation.navigate("Account");
      })
      .catch((err) => {
        setLoginError("Old password is not correct.");
      });
  };

  const handleOldPasswordChange = (text) => {
    setOldPassword(text);

    if (text === "") {
      setOldPasswordError("");
      return;
    }

    if (!passwordRegx.test(text)) {
      setOldPasswordError(
        "Password need to have at least 8 characters, one letter, one number."
      );
    } else {
      setOldPasswordError("");
    }
  };

  const handleNewPasswordChange = (text) => {
    setNewPassword(text);

    if (text === "") {
      setNewPasswordError("");
      return;
    }

    if (!passwordRegx.test(text)) {
      setNewPasswordError(
        "Password need to have at least 8 characters, one letter, one number."
      );
    } else {
      setNewPasswordError("");
    }
  };

  const handleCancel = () => {
    setOldPassword("");
    setNewPassword("");
    navigation.navigate("Account");
  };

  return (
    <PageContainer>
      <Text
        style={{
          fontSize: 32,
        }}
      >
        Change Password
      </Text>
      <Input
        isPassword={true}
        name='Old Password'
        placeholder='Old Password'
        onChangeText={handleOldPasswordChange}
        value={oldPassword}
        error={oldPasswordError}
      />
      <Input
        isPassword={true}
        name='New Password'
        placeholder='New Password'
        onChangeText={handleNewPasswordChange}
        value={newPassword}
        error={newPasswordError}
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
          disabled={oldPassword.trim() === "" || newPassword.trim() === ""}
        />
        <CustomButton title='Cancel' onPress={handleCancel} />
      </View>
      {loginError && (
        <Text style={{ color: theme.YELLOW, marginTop: 8 }}>{loginError}</Text>
      )}
    </PageContainer>
  );
};

export default ChangePassword;
