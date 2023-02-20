import PageContainer from "../../components/UI/PageContainer";
import { Text, View } from "react-native";
import CustomButton from "../../components/UI/CustomButton";
import Input from "../../components/UI/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNote,
  getBeeGarden,
} from "../../store/beeGardenSlice.js/beeGardenActions";
const NewNote = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { beeHaveId } = route.params;

  const handleSubmit = () => {
    console.log(beeHaveId);
    if (title.trim() !== "" || content.trim() !== "") {
      dispatch(addNote({ beeHaveId, title, content })).then(() => {
        dispatch(getBeeGarden()).then(() => {
          setContent("");
          setTitle("");
          navigation.navigate("Map");
        });
      });
    }
  };

  const handleCancel = () => {
    setContent("");
    setTitle("");
    navigation.navigate("Map");
  };

  return (
    <PageContainer>
      <Text
        style={{
          fontSize: 32,
        }}
      >
        Add new Note
      </Text>
      <Input
        name='Title'
        placeholder='Title'
        onChangeText={(t) => setTitle(t)}
        value={title}
      />
      <Input
        mulitiline={true}
        name='Content'
        placeholder='Content'
        onChangeText={(t) => setContent(t)}
        value={content}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignSelf: "stretch",
          alignItems: "center",
          paddingVertical: 16,
          marginTop: 32,
        }}
      >
        <CustomButton
          title='Submit'
          onPress={handleSubmit}
          disabled={title.trim() === "" || content.trim() === ""}
        />
        <CustomButton title='Cancel' onPress={handleCancel} />
      </View>
    </PageContainer>
  );
};

export default NewNote;
