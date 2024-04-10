import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import RestaurantsScreen from "./src/features/restaurant/screens/RestaurantsScreen";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

const isAndroid = Platform.OS === "android";

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
export default function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </AppContainer>
  );
}
