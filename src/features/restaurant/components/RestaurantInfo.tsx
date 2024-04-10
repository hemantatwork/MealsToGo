import React from "react";
import { ScrollView, View } from "react-native";
import RestaurantInfoCard from "./RestaurantInfoCard";
import styled from "styled-components";

const RestaurantInfoContainer = styled(ScrollView)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardContainer = styled(View)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantInfo = () => {
  return (
    <RestaurantInfoContainer>
      {Array.from({ length: 5 }).map((_, index) => (
        <CardContainer key={index}>
          <RestaurantInfoCard />
        </CardContainer>
      ))}
    </RestaurantInfoContainer>
  );
};

export default RestaurantInfo;
