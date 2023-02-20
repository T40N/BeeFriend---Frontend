import { StyleSheet, Image, Text, View, Dimensions } from "react-native";
import Draggable from "react-native-draggable";
import { useDispatch } from "react-redux";
import theme from "../../constants/theme";
import { setBeeHavePosition } from "../../store/beeGardenSlice.js/beeGardenActions";

const BeeHive = ({ xPosition, yPosition, id, onMenuOpen, name }) => {
  const dispatch = useDispatch();
  let ScreenHeight = Dimensions.get("window").height;
  let ScreenWidth = Dimensions.get("window").width;

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      fontSize: 18,
      color: theme.BLACK,
      fontWeight: "700",
    },
    beehive: {
      width: 60,
      height: 60,
    },
  });

  const handleDragRelease = (event, gestureState, bounds) => {
    const nativeEvent = event.nativeEvent;
    console.log("pageX", nativeEvent.pageX);
    console.log("pageY", nativeEvent.pageY);
    dispatch(
      setBeeHavePosition({
        xPosition: Math.floor(nativeEvent.pageX),
        yPosition: Math.floor(nativeEvent.pageY - 100),
        id: id,
      })
    );
  };

  return (
    <Draggable
      x={xPosition}
      y={yPosition}
      minX={10}
      minY={0}
      maxX={ScreenWidth}
      maxY={ScreenHeight - 310}
      onShortPressRelease={() => onMenuOpen(id)}
      onDragRelease={handleDragRelease}
    >
      <View style={styles.container}>
        <Text style={styles.label}>{name}</Text>
        <Image
          source={require("../../assets/beehive.png")}
          style={styles.beehive}
        />
      </View>
    </Draggable>
  );
};

export default BeeHive;
