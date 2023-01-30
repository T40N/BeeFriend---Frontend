import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import Tabs from "./components/navigation/Tabs";

import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}
