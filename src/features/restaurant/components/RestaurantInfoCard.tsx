import * as React from "react";
import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RatingContainer = styled.View`
  flex-direction: row;
  padding-left: ${(props) => props.theme.space[3]};
`;

const CardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[2]};
`;

const RestaurantInfoCard = ({ restaurant = {} }: any) => {
  const {
    name = "La Hospitale",
    icon,
    photos = [
      "https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg",
    ],
    address = "123 Main Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  console.log(
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily
  );
  return (
    <Card mode="outlined">
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>

      <CardCover source={{ uri: photos[0] }} />
      <RatingContainer>
        {Array.from({ length: rating }).map((_, index) => (
          <Text key={index}>⭐</Text>
        ))}
      </RatingContainer>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default RestaurantInfoCard;
