import { useState } from "react";
import CustomButton from "../../components/UI/CustomButton";
import Input from "../../components/UI/Input";
import PageContainer from "../../components/UI/PageContainer";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { postBeeHave } from "../../store/beeGardenSlice.js/beeGardenActions";

const AddBeeHave = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log(handleSubmit);
    if (name.trim() !== "") {
      dispatch(postBeeHave(name))
        .unwrap()
        .then(() => {
          navigation.navigate("Map");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <PageContainer>
      <Input
        name="Name of BeeHive"
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Name of BeeHive"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          alignSelf: "stretch",
          height: 120,
          paddingHorizontal: 32,
        }}
      >
        <CustomButton
          title="Submit"
          onPress={handleSubmit}
          disabled={name.trim() === ""}
        />
        <CustomButton
          title="Cancel"
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </PageContainer>
  );
};
export default AddBeeHave;
