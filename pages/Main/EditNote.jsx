import PageContainer from "../../components/UI/PageContainer";
import { Text, View } from "react-native";
import CustomButton from "../../components/UI/CustomButton";
import { useDispatch } from "react-redux";
import {
  deleteNote,
  editNote,
  getBeeGarden,
} from "../../store/beeGardenSlice.js/beeGardenActions";
import Input from "../../components/UI/Input";
import { useState } from "react";

const EditNote = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const { noteId } = route.params;

  const handleDelete = () => {
    dispatch(deleteNote({ noteId })).then(() => {
      dispatch(getBeeGarden()).then(() => {
        setContent("");
        setTitle("");
        navigation.navigate("Map");
      });
    });
  };

  const handleCancel = () => {
    setContent("");
    setTitle("");
    navigation.navigate("Map");
  };

  const handleEdit = () => {
    dispatch(editNote({ noteId, title, content })).then(() => {
      dispatch(getBeeGarden()).then(() => {
        setContent("");
        setTitle("");
        navigation.navigate("Map");
      });
    });
  };

  return (
    <PageContainer>
      <Text
        style={{
          fontSize: 32,
        }}
      >
        Edit Note
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
          flexDirection: "column",
          alignSelf: "stretch",
          alignItems: "center",
          paddingVertical: 16,
          marginTop: 2,
          height: 200,
        }}
      >
        <CustomButton
          title='Submit Edit'
          onPress={handleEdit}
          disabled={title.trim() === "" || content.trim() === ""}
        />
        <CustomButton title='Delete' onPress={handleDelete} />
        <CustomButton title='Cancel' onPress={handleCancel} />
      </View>
    </PageContainer>
  );
};

export default EditNote;
