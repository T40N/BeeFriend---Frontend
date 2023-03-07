import CustomButton from "../../components/UI/CustomButton";
import Input from "../../components/UI/Input";
import PageContainer from "../../components/UI/PageContainer";
import { View, Text } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import theme from "../../constants/theme";
import { useDispatch } from "react-redux";
import {
  addData,
  getBeeGarden,
} from "../../store/beeGardenSlice.js/beeGardenActions";

const AddDataToHistory = ({ route, navigation }) => {
  const [waxValue, setWaxValue] = useState(0);
  const [honeyValue, setHoneyValue] = useState(0);

  const dispatch = useDispatch();

  const { honeyTakenAll, waxTakenAll, history, beeHaveId } = route.params;

  const handleSubmit = () => {
    dispatch(
      addData({
        beeHiveId: beeHaveId,
        waxTaken: waxValue,
        honeyTaken: honeyValue,
      })
    ).then(() => {
      dispatch(getBeeGarden()).then(() => {
        navigation.navigate("Map");
      });
    });
  };

  return (
    <PageContainer>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          alignSelf: "stretch",
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontSize: 12, color: theme.GREY, marginRight: 14 }}>
          Wax Taken (liters):
        </Text>
        <NumericInput
          value={waxValue}
          onChange={(value) => setWaxValue(value)}
          totalWidth={240}
          totalHeight={50}
          iconSize={25}
          step={0.1}
          valueType='real'
          rounded
          textColor={theme.BLACK}
          iconStyle={{ color: theme.YELLOW }}
          rightButtonBackgroundColor={theme.GREY}
          leftButtonBackgroundColor={theme.GREY}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          alignSelf: "stretch",
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontSize: 12, color: theme.GREY, marginRight: 14 }}>
          Honey Taken (liters):
        </Text>
        <NumericInput
          value={honeyValue}
          onChange={(value) => setHoneyValue(value)}
          totalWidth={240}
          totalHeight={50}
          iconSize={25}
          step={0.1}
          valueType='real'
          rounded
          textColor={theme.BLACK}
          iconStyle={{ color: theme.YELLOW }}
          rightButtonBackgroundColor={theme.GREY}
          leftButtonBackgroundColor={theme.GREY}
        />
      </View>
      <View
        style={{
          marginTop: 18,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 18,
          alignSelf: "stretch",
        }}
      >
        <CustomButton
          title='Submit'
          onPress={handleSubmit}
          disabled={waxValue <= 0 || honeyValue <= 0}
        />
        <CustomButton
          title='Cancel'
          onPress={() =>
            navigation.navigate("History", {
              honeyTakenAll,
              waxTakenAll,
              history,
              beeHaveId,
            })
          }
        />
      </View>
    </PageContainer>
  );
};

export default AddDataToHistory;
