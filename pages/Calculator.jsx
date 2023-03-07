import { useRef } from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";
import PageContainer from "../components/UI/PageContainer";
import theme from "../constants/theme";

const Calculator = () => {
  const syrupRef = useRef();
  const sugarRef = useRef();
  const waterRef = useRef();

  const [syrup, setSyrup] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [water, setWater] = useState(0);

  return (
    <PageContainer>
      <Text
        style={{
          fontSize: 32,
        }}
      >
        Calculator
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: theme.GREY,
        }}
      >
        The calculator allows you to add the sugar and water content in the
        given volume of sugar syrup 3:2 proportions.
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontSize: 12, color: theme.GREY, marginRight: 14 }}>
          Quantity of Syrup (liters):
        </Text>
        <NumericInput
          ref={syrupRef}
          value={0}
          initValue={syrup}
          onChange={(value) => {
            if (value > syrup) {
              setSugar((prevState) => prevState + 0.75);
              setWater((prevState) => prevState + 0.5);
            } else {
              setSugar((prevState) => prevState - 0.75);
              setWater((prevState) => prevState - 0.5);
            }
            setSyrup(value);
          }}
          totalWidth={240}
          totalHeight={50}
          iconSize={25}
          step={1}
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontSize: 12, color: theme.GREY, marginRight: 14 }}>
          Quantity of Sugar in Syrup (kilograms):
        </Text>
        <NumericInput
          ref={sugarRef}
          value={0}
          initValue={sugar}
          onChange={(value) => {
            if (value > sugar) {
              setSyrup((prevState) => prevState + 1);
              setWater((prevState) => prevState + 0.5);
            } else {
              setSyrup((prevState) => prevState - 1);
              setWater((prevState) => prevState - 0.5);
            }
            setSugar(value);
          }}
          totalWidth={240}
          totalHeight={50}
          iconSize={25}
          step={0.75}
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          paddingVertical: 16,
        }}
      >
        <Text style={{ fontSize: 12, color: theme.GREY, marginRight: 14 }}>
          Quantity of Water in Syrup (liters):
        </Text>
        <NumericInput
          ref={waterRef}
          value={0}
          initValue={water}
          onChange={(value) => {
            if (value > water) {
              setSyrup((prevState) => prevState + 1);
              setSugar((prevState) => prevState + 0.75);
            } else {
              setSyrup((prevState) => prevState - 1);
              setSugar((prevState) => prevState - 0.75);
            }
            setWater(value);
          }}
          totalWidth={240}
          totalHeight={50}
          iconSize={25}
          step={0.5}
          valueType='real'
          rounded
          textColor={theme.BLACK}
          iconStyle={{ color: theme.YELLOW }}
          rightButtonBackgroundColor={theme.GREY}
          leftButtonBackgroundColor={theme.GREY}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
        }}
      >
        Syrup: {syrup} liters
      </Text>
      <Text
        style={{
          fontSize: 18,
        }}
      >
        Sugar: {sugar} kilograms
      </Text>
      <Text
        style={{
          fontSize: 18,
        }}
      >
        Water: {syrup} liters
      </Text>
    </PageContainer>
  );
};

export default Calculator;
