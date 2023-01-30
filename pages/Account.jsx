import { useEffect } from "react";
import { Button, Text, Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CustomButton from "../components/UI/CustomButton";
import PageContainer from "../components/UI/PageContainer";
import { ConstStyles } from "../constants/constStyles";
import theme from "../constants/theme";
import { logout } from "../store/userSlice/userSlice";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(logout);

  const handleOnLogout = async () => {
    dispatch(logout());
  };

  const styles = StyleSheet.create({
    shadowCard: {
      backgroundColor: "transparent",
      marginVertical: 16,
      borderRadius: 16,
      ...ConstStyles.shadow,
    },
    contentCard: {
      width: 320,
      height: 560,
      backgroundColor: theme.WHITE,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,

      overflow: "hidden",
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      borderColor: theme.YELLOW,
      borderWidth: 5,
      tintColor: theme.YELLOW,
    },
    label: {
      color: theme.GREY,
      fontSize: 18,
    },
    text: {
      fontSize: 26,
      color: theme.BLACK,
    },
  });

  return (
    <PageContainer>
      <View style={styles.shadowCard}>
        <View style={styles.contentCard}>
          <Image
            source={require("../assets/account.png")}
            style={styles.image}
          />

          <Text style={{ ...styles.text, marginTop: 12 }}>{user.name}</Text>
          <Text style={styles.text}>{user.surname}</Text>
          <View
            style={{
              borderBottomWidth: StyleSheet.hairlineWidth,
              alignSelf: "stretch",
              marginTop: 16,
              marginLeft: 36,
              marginRight: 36,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: theme.BLACK,
              marginTop: 6,
              marginBottom: 86,
            }}
          >
            {user.email}
          </Text>
          <CustomButton title="Logout" onPress={handleOnLogout} />
        </View>
      </View>
    </PageContainer>
  );
};

export default Account;
