import PageContainer from "../../components/UI/PageContainer";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import BeeHive from "../../components/BeeHive/BeeHive";
import CustomButton from "../../components/UI/CustomButton";
import theme from "../../constants/theme";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getBeeGarden } from "../../store/beeGardenSlice.js/beeGardenActions";

const Map = ({ navigation }) => {
  const dispatch = useDispatch();
  const { beeHaves } = useSelector((state) => state.beeGarden);
  const { token } = useSelector((state) => state.user);
  let ScreenHeight = Dimensions.get("window").height;
  console.log(beeHaves);
  useEffect(() => {
    dispatch(getBeeGarden(token));
    console.log("get");
  }, []);

  const styles = StyleSheet.create({
    beehivesContainer: {
      alignSelf: "stretch",
      height: ScreenHeight - 300,
      borderBottomColor: theme.GREY,
      borderBottomWidth: 1,
      borderTopColor: theme.GREY,
      borderTopWidth: 1,
      marginBottom: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    noBeeHavesText: {
      fontSize: 18,
      fontWeight: "700",
      color: theme.YELLOW,
    },
  });

  const handleMenuOpen = (id) => {
    navigation.navigate("BeeHaveOptions", {
      beeHaveId: id,
    });
  };

  return (
    <PageContainer>
      <View style={styles.beehivesContainer}>
        {beeHaves.length > 0 ? (
          beeHaves.map((beeHave) => {
            return (
              <BeeHive
                key={beeHave._id}
                id={beeHave._id}
                onMenuOpen={handleMenuOpen}
                name={beeHave.name}
                xPosition={beeHave.xPosition || 0}
                yPosition={beeHave.yPosition || 0}
              />
            );
          })
        ) : (
          <Text style={styles.noBeeHavesText}>
            You don't have bee hives add one!
          </Text>
        )}
      </View>
      <CustomButton
        title='Add BeeHive'
        onPress={() => navigation.navigate("AddBeeHave")}
      />
    </PageContainer>
  );
};

export default Map;
