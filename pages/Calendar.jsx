import { useState } from "react";
import { Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { useSelector } from "react-redux";
import CustomButton from "../components/UI/CustomButton";
import Input from "../components/UI/Input";
import PageContainer from "../components/UI/PageContainer";
import theme from "../constants/theme";
import { ConstStyles } from "../constants/constStyles";
import { useDispatch } from "react-redux";
import { addEvent, getCalendar } from "../store/userSlice/userActions";
import { useEffect } from "react";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const Calendar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [name, setName] = useState("");
  const [opis, setOpis] = useState("");

  useEffect(() => {
    dispatch(getCalendar());
  }, []);

  const { calendar } = user;

  let markedDates = {};
  if (calendar.length !== 0) {
    calendar.forEach((event) => {
      markedDates = {
        ...markedDates,
        [formatDate(event.date)]: {
          marked: true,
          dotColor: theme.YELLOW,
        },
      };
    });
  }

  const selectedDateMarked = selectedDate
    ? calendar.filter((event) => selectedDate === formatDate(event.date))[0]
    : null;

  const handleSubmitEvent = () => {
    dispatch(
      addEvent({
        date: selectedDate,
        name,
        opis,
      })
    ).then(() => {
      setName("");
      setOpis("");
      dispatch(getCalendar());
    });
  };

  return (
    <Agenda
      selected={undefined}
      theme={{
        dotColor: theme.YELLOW,
        selectedDayBackgroundColor: theme.YELLOW,
      }}
      markedDates={markedDates}
      onDayPress={(date) => setSelectedDate(date.dateString)}
      renderList={() => {
        if (selectedDateMarked) {
          return (
            <PageContainer>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  margin: 8,
                  height: 200,
                  ...ConstStyles.shadow,
                  backgroundColor: theme.WHITE,
                  borderColor: theme.BLACK,
                  borderWidth: 1,
                  borderRadius: 4,
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 32 }}>{selectedDateMarked.name}</Text>
                <Text style={{ fontSize: 24 }}>{selectedDateMarked.opis}</Text>
              </View>
            </PageContainer>
          );
        }

        return (
          <PageContainer>
            <Text
              style={{
                fontSize: 32,
              }}
            >
              Add Event
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "stretch",
              }}
            >
              <Input
                isPassword={false}
                name='Name'
                placeholder='Name'
                value={name}
                error={name.trim === "" && "You need to specify name of event"}
                onChangeText={(t) => setName(t)}
              />
              <Input
                error={
                  opis.trim === "" && "You need to specify description of event"
                }
                isPassword={false}
                name='Description'
                placeholder='Description'
                value={opis}
                onChangeText={(t) => setOpis(t)}
              />
              <CustomButton
                title='Submit Event'
                onPress={handleSubmitEvent}
                disabled={name.trim === "" || opis.trim === ""}
              />
            </View>
          </PageContainer>
        );
      }}
    />
  );
};

export default Calendar;
