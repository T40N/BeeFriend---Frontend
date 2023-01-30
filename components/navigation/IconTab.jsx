import { View, Text, Image } from "react-native";
import theme from "../../constants/theme";

const IconTab = ({ focused, iconPath, name }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={iconPath}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? theme.YELLOW : theme.GREY,
        }}
      />
      <Text
        style={{
          color: focused ? theme.YELLOW : theme.GREY,
          fontSize: 12,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default IconTab;
