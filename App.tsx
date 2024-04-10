import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import RestaurantsScreen from "./src/features/restaurant/screens/RestaurantsScreen";
import styled from "styled-components";

const isAndroid = Platform.OS === "android";

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
export default function App() {
  return (
    <AppContainer>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </AppContainer>
  );
}
