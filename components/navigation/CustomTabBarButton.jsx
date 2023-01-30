import { TouchableOpacity, View } from "react-native";
import { ConstStyles } from "../../constants/constStyles";
import theme from "../../constants/theme";

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <View style={{ ...ConstStyles.shadow }}>
      <TouchableOpacity
        activeOpacity={0.85}
        style={{
          top: -30,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: theme.YELLOW,
            ...ConstStyles.shadow,
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBarButton;
