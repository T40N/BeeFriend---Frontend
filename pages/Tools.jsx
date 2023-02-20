import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CustomButton from "../components/UI/CustomButton";
import Input from "../components/UI/Input";
import PageContainer from "../components/UI/PageContainer";
import theme from "../constants/theme";
import {
  addTools,
  getMagazyn,
  substractTool,
} from "../store/magazynSlice/magazynActions";

const Tools = () => {
  const { tools } = useSelector((state) => state.magazyn);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [opis, setOpis] = useState("");

  console.log(tools);

  const handleSubmitTool = () => {
    dispatch(addTools({ name, opis })).then(() => {
      dispatch(getMagazyn());
    });
  };

  const handleOnDelete = (id) => {
    console.log("dispatchID", id);
    dispatch(substractTool({ id })).then(() => {
      dispatch(getMagazyn());
    });
  };

  return (
    <PageContainer>
      <Text
        style={{
          fontSize: 32,
          marginTop: 44,
        }}
      >
        Tools
      </Text>
      <View
        style={{
          display: "flex",
          alignSelf: "stretch",
          alignItems: "center",
        }}
      >
        <Input
          name='name'
          value={name}
          error={name.trim() === ""}
          onChangeText={(t) => setName(t)}
          placeholder='name'
        />
        <Input
          name='description'
          placeholder='description'
          value={opis}
          error={opis.trim() === ""}
          onChangeText={(t) => setOpis(t)}
        />
        <CustomButton
          title='Submit Tool'
          onPress={handleSubmitTool}
          disabled={name.trim() === "" || opis.trim() === ""}
        />
      </View>
      <View style={{ height: 300, marginTop: 36, marginBottom: 36 }}>
        <ScrollView
          contentContainerStyle={{
            marginTop: 32,
            flexGrow: 1,
            paddingBottom: 50,
          }}
        >
          {tools.length ? (
            tools.map(({ name, _id, opis, quantity }) => {
              console.log(_id);
              return (
                <TouchableOpacity
                  key={_id}
                  onPress={() => handleOnDelete(_id)}
                  style={{
                    borderWidth: 1,
                    margin: 12,
                    padding: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                    }}
                  >
                    {name}
                  </Text>
                  <Text>{opis}</Text>
                  <Text>{quantity}</Text>
                  <Text
                    style={{
                      color: theme.YELLOW,
                    }}
                  >
                    Press to delete.
                  </Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text
              style={{
                color: theme.YELLOW,
              }}
            >
              You don't have tools yet.
            </Text>
          )}
        </ScrollView>
      </View>
    </PageContainer>
  );
};

export default Tools;
