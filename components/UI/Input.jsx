import { TextInput, Text, StyleSheet, View } from "react-native";

import theme from "../../constants/theme";

const Input = ({
  name,
  placeholder,
  isPassword,
  onChangeText,
  onFocus,
  onBlur,
  value,
  error,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.GREY,
      width: "70%",
      margin: 8,
      borderRadius: 8,
      padding: 6,
      shadowColor: theme.BLACK,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    label: {
      color: theme.WHITE,
      fontSize: 16,
    },
    error: {
      color: theme.YELLOW,
      fontSize: 12,
    },
    input: {
      backgroundColor: theme.WHITE,
      borderRadius: 8,
      padding: 6,
      paddingLeft: 10,
    },
    textContainer: {
      justifyContent: "space-between",
      marginBottom: 6,
      marginLeft: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{name}</Text>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
      <TextInput
        style={styles.input}
        name={name}
        placeholder={placeholder || ""}
        secureTextEntry={isPassword || false}
        onChangeText={onChangeText}
        onFocus={onFocus || false}
        onBlur={onBlur || false}
        value={value}
      />
    </View>
  );
};

export default Input;
