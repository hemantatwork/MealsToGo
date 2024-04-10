import React from "react";
import { ScrollView, View } from "react-native";
import RestaurantInfoCard from "./RestaurantInfoCard";
import styled from "styled-components";

const RestaurantInfoContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #ecca9c;
`;

const CardContainer = styled(View)`
  margin-bottom: 15px;
`;

const RestaurantInfo = () => {
  return (
    <RestaurantInfoContainer>
      <ScrollView>
        {Array.from({ length: 5 }).map((_, index) => (
          <CardContainer key={index}>
            <RestaurantInfoCard />
          </CardContainer>
        ))}
      </ScrollView>
    </RestaurantInfoContainer>
  );
};

export default RestaurantInfo;
