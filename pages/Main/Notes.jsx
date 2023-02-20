import PageContainer from "../../components/UI/PageContainer";
import { Text, ScrollView, View, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import theme from "../../constants/theme";
import CustomButton from "../../components/UI/CustomButton";
import Note from "../../components/UI/Note";
const Notes = ({ route, navigation }) => {
  const screenWidth = Dimensions.get("window").width;
  const { beeHaves } = useSelector((state) => state.beeGarden);
  const { beeHaveId } = route.params;

  const notes = beeHaves.filter((beeHave) => beeHave._id === beeHaveId)[0]
    .notes;

  console.log(notes);

  return (
    <PageContainer>
      <Text
        style={{
          fontSize: 32,
          marginTop: 32,
          marginBottom: 16,
        }}
      >
        Notes
      </Text>
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          width: screenWidth - 16,
          height: 460,
          backgroundColor: theme.WHITE,
        }}
      >
        {notes.length > 0 ? (
          <>
            {notes.map((note) => {
              return (
                <Note
                  title={note.title}
                  content={note.content}
                  key={note._id}
                  onPress={() =>
                    navigation.navigate("EditNote", {
                      noteId: note._id,
                    })
                  }
                />
              );
            })}
          </>
        ) : (
          <Text
            style={{
              fontSize: 24,
              color: theme.YELLOW,

              textAlign: "center",
            }}
          >
            You don't have notes for this BeeHive yet!
          </Text>
        )}
      </ScrollView>
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignSelf: "stretch",
          alignItems: "center",
          paddingVertical: 16,
          marginBottom: 48,
        }}
      >
        <CustomButton
          title='New Note'
          onPress={() =>
            navigation.navigate("NewNote", {
              beeHaveId,
            })
          }
        />
        <CustomButton
          title='Cancel'
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </PageContainer>
  );
};

export default Notes;
