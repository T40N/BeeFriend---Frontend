import { Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../constants/theme";

const CustomButton = ({ onPress, title, disabled }) => {
  const styles = StyleSheet.create({
    button: {
      paddingVertical: 14,
      paddingHorizontal: 40,
      backgroundColor: theme.YELLOW,
      color: theme.GREY,
      borderRadius: 8,
      shadowColor: theme.BLACK,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    text: {
      color: theme.WHITE,
      fontWeight: "700",
    },
  });

  const disabledStyles = StyleSheet.create({
    button: {
      ...styles.button,
      backgroundColor: theme.GREY,
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={disabled ? 0.8 : 1}
      onPress={onPress}
      style={disabled ? disabledStyles.button : styles.button}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
