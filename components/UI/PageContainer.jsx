import { ScrollView, StyleSheet, View } from "react-native";

import theme from "../../constants/theme";

const PageContainer = ({ children, isScroll }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.WHITE,
      color: theme.BLACK,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  if (isScroll)
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    );

  return <View style={styles.container}>{children}</View>;
};

export default PageContainer;
