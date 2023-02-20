import PageContainer from "../../components/UI/PageContainer";
import { Text, Dimensions, View } from "react-native";
import theme from "../../constants/theme";
import { LineChart } from "react-native-chart-kit";
import CustomButton from "../../components/UI/CustomButton";
import { useState } from "react";
import { useSelector } from "react-redux";
const History = ({ route, navigation }) => {
  const { beeHaves } = useSelector((state) => state.beeGarden);
  const [dataCategory, setDataCategory] = useState("waxTaken");
  const { beeHaveId } = route.params;
  const currentBeeHave = beeHaves.filter(
    (beeHave) => beeHave._id === beeHaveId
  )[0];
  const { history, honeyTakenAll, waxTakenAll } = currentBeeHave;
  const screenWidth = Dimensions.get("window").width;
  console.log(currentBeeHave);
  let labels = [];
  let data = [];

  if (history.length > 0) {
    labels = history.map((historyEvent) => {
      return (
        new Date(historyEvent.date).getDate() +
        "." +
        new Date(historyEvent.date).getMonth()
      );
    });

    data = history.map((historyEvent) => {
      return historyEvent[dataCategory];
    });
  }

  console.log(labels);
  console.log(data);
  return (
    <PageContainer>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "stretch",
          paddingVertical: 16,
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            color: theme.GREY,
            marginBottom: 12,
          }}
        >
          History
        </Text>
        <CustomButton
          title="Change category"
          onPress={() =>
            setDataCategory((prevState) =>
              prevState === "waxTaken" ? "honeyTaken" : "waxTaken"
            )
          }
        />
      </View>
      {history.length > 0 ? (
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data,
              },
            ],
          }}
          width={screenWidth - 10}
          height={400}
          yAxisLabel={""}
          yAxisInterval={3}
          chartConfig={{
            backgroundColor: theme.WHITE,
            backgroundGradientFrom: theme.GREY,
            backgroundGradientTo: theme.GREY,
            color: () => theme.YELLOW,
            labelColor: () => theme.WHITE,
            style: {
              borderRadius: 16,
              marginVertical: 10,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: theme.BLACK,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : (
        <Text
          style={{
            color: theme.YELLOW,
            fontSize: 18,
            marginTop: 150,
            marginBottom: 150,
          }}
        >
          This BeeHive don't have data yet.
        </Text>
      )}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 16,
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <CustomButton
          title="Add Data"
          onPress={() =>
            navigation.navigate("AddDataToHistory", {
              beeHaveId,
            })
          }
        />
        <CustomButton
          title="Cancel"
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </PageContainer>
  );
};

export default History;
