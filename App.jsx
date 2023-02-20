import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Tabs from "./components/Navigation/Tabs";

import { store, persistor } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
