import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PageContainer from "../components/UI/PageContainer";
import {
  getMagazyn,
  substractFodder,
} from "../store/magazynSlice/magazynActions";
import CustomButton from "../components/UI/CustomButton";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import { addFodder } from "../store/magazynSlice/magazynActions";
import theme from "../constants/theme";

const Magazyn = ({ navigation }) => {
  const { syrop } = useSelector((state) => state.magazyn);
  const dispatch = useDispatch();

  const [syropQuantity, setSyropQuantity] = useState(0);

  useEffect(() => {
    dispatch(getMagazyn());
  }, []);

  const handleAddSyrop = () => {
    dispatch(addFodder(syropQuantity)).then(() => {
      dispatch(getMagazyn());
    });
  };

  const handleSubstractSyrop = () => {
    dispatch(substractFodder(syropQuantity)).then(() => {
      dispatch(getMagazyn());
    });
  };

  return (
    <PageContainer>
      <Text
        style={{
          fontSize: 32,
          marginTop: 24,
        }}
      >
        Magazyn
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            margin: 16,
          }}
        >
          Sugar: {syrop}kg
        </Text>
        <View
          style={{
            display: "flex",
            alignSelf: "stretch",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <NumericInput
            value={syropQuantity}
            onChange={(value) => {
              setSyropQuantity(value);
            }}
            totalWidth={240}
            totalHeight={50}
            iconSize={20}
            step={1}
            valueType='real'
            rounded
            textColor={theme.BLACK}
            iconStyle={{ color: theme.YELLOW }}
            rightButtonBackgroundColor={theme.GREY}
            leftButtonBackgroundColor={theme.GREY}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "stretch",
              height: 100,
              justifyContent: "space-around",
              width: 400,
            }}
          >
            <CustomButton
              title='Add Sugar'
              onPress={handleAddSyrop}
              disabled={syropQuantity === 0}
            />
            <CustomButton
              title='Subtract Sugar'
              onPress={handleSubstractSyrop}
              disabled={syropQuantity === 0 || syrop === 0}
            />
          </View>
        </View>
      </View>
      <CustomButton
        title='Tools'
        onPress={() => navigation.navigate("Tools")}
      />
    </PageContainer>
  );
};

export default Magazyn;
