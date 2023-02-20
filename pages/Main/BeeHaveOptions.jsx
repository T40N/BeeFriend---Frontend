import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/UI/CustomButton";
import PageContainer from "../../components/UI/PageContainer";
import { getBeeHaveById } from "../../store/beeGardenSlice.js/beeGardenSlice";

const BeeHaveOptions = ({ route, navigation }) => {
  const { beeHaveId } = route.params;
  const dispatch = useDispatch();
  const { activeBeeHave } = useSelector((state) => state.beeGarden);
  useEffect(() => {
    dispatch(getBeeHaveById(beeHaveId));
  }, [beeHaveId]);

  console.log("options:", activeBeeHave);

  const styles = StyleSheet.create({
    buttonContainer: {
      alignSelf: "stretch",
      display: "flex",
      height: 360,
      justifyContent: "space-around",
      alignItems: "center",
    },
  });
  return (
    <PageContainer>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="History"
          onPress={() =>
            navigation.navigate("History", {
              beeHaveId,
            })
          }
        />
        <CustomButton
          title="Notes"
          onPress={() =>
            navigation.navigate("Notes", {
              beeHaveId,
            })
          }
        />
        <CustomButton title="Delete" onPress={() => ""} />
        {/* to do delete action */}
        <CustomButton
          title="Cancel"
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </PageContainer>
  );
};

export default BeeHaveOptions;
