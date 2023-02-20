import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Map from "./Map";
import AddBeeHave from "./AddBeeHave";
import BeeHaveOptions from "./BeeHaveOptions";
import History from "./History";
import AddDataToHistory from "./AddDataToHistory";
import Notes from "./Notes";
import NewNote from "./NewNote";
import EditNote from "./EditNote";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail";
import Tools from "../Tools";

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen name='Map' component={Map} />
      <Tab.Screen name='AddBeeHave' component={AddBeeHave} />
      <Tab.Screen name='BeeHaveOptions' component={BeeHaveOptions} />
      <Tab.Screen name='Notes' component={Notes} />
      <Tab.Screen name='AddDataToHistory' component={AddDataToHistory} />
      <Tab.Screen name='History' component={History} />
      <Tab.Screen name='NewNote' component={NewNote} />
      <Tab.Screen name='EditNote' component={EditNote} />
      <Tab.Screen name='ChangePassword' component={ChangePassword} />
      <Tab.Screen name='ChangeEmail' component={ChangeEmail} />
      <Tab.Screen name='Tools' component={Tools} />
    </Tab.Navigator>
  );
};

export default Main;
