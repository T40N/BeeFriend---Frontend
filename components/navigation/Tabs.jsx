import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import theme from "../../constants/theme";

import { ConstStyles } from "../../constants/constStyles";
import CustomTabBarButton from "./CustomTabBarButton";

import Main from "../../pages/Main";
import Account from "../../pages/Account";
import Calendar from "../../pages/Calendar";
import Magazyn from "../../pages/Magazyn";
import Calculator from "../../pages/Calculator";
import IconTab from "./IconTab";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { token } = useSelector((state) => state.user);
  return (
    <>
      {token ? (
        <Tab.Navigator
          initialRouteName={token ? "Home" : "SignIn"}
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            lazy: false,
            tabBarStyle: {
              width: 360,
              pasition: "absolute",
              bottom: 25,
              left: 16,
              right: 10,
              elevation: 0,
              backgroundColor: theme.WHITE,
              borderRadius: 15,
              height: 75,
              ...ConstStyles.shadow,
            },
          }}
        >
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              tabBarIcon: ({ focused }) => (
                <IconTab
                  focused={focused}
                  iconPath={require("../../assets/calendar.png")}
                  name="Calendar"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Magazyn"
            component={Magazyn}
            options={{
              tabBarIcon: ({ focused }) => (
                <IconTab
                  focused={focused}
                  iconPath={require("../../assets/magazyn.png")}
                  name="Magazyn"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={Main}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("../../assets/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: theme.WHITE,
                  }}
                />
              ),
              tabBarButton: (props) => <CustomTabBarButton {...props} />,
            }}
          />
          <Tab.Screen
            name="Calculator"
            component={Calculator}
            options={{
              tabBarIcon: ({ focused }) => (
                <IconTab
                  focused={focused}
                  iconPath={require("../../assets/calculator.png")}
                  name="Calculator"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarIcon: ({ focused }) => (
                <IconTab
                  focused={focused}
                  iconPath={require("../../assets/account.png")}
                  name="Account"
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName={token ? "Home" : "SignIn"}
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            lazy: false,
            tabBarStyle: {
              width: 360,
              pasition: "absolute",
              bottom: 25,
              left: 16,
              right: 10,
              elevation: 0,
              backgroundColor: theme.WHITE,
              borderRadius: 15,
              height: 75,
              ...ConstStyles.shadow,
            },
          }}
        >
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              tabBarIcon: ({ focused }) => (
                <IconTab
                  focused={focused}
                  iconPath={require("../../assets/login.png")}
                  name="Login"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Register"
            component={Register}
            options={{
              tabBarIcon: ({ focused }) => (
                <IconTab
                  focused={focused}
                  iconPath={require("../../assets/register.png")}
                  name="Register"
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

export default Tabs;
