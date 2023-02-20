import { Pressable, Text, View } from "react-native";
import { ConstStyles } from "../../constants/constStyles";
import theme from "../../constants/theme";

const Note = ({ title, content, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
        ...ConstStyles.shadow,
        backgroundColor: theme.WHITE,
        borderColor: theme.BLACK,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: theme.YELLOW,
        }}
      >
        {title}
      </Text>
      <Text>{content}</Text>
    </Pressable>
  );
};

export default Note;
