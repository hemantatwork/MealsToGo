import * as React from "react";
import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RatingContainer = styled.View<{ $primary?: boolean }>`
  flex-direction: row;
  padding-left: ${(props) => (props.$primary ? 10 : 20)}px;
`;

const CardCover = styled(Card.Cover)`
  margin: 10px;
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
    <Card elevation={5}>
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>

      <CardCover source={{ uri: photos[0] }} />
      <RatingContainer $primary>
        {Array.from({ length: rating }).map((_, index) => (
          <Text key={index}>⭐</Text>
        ))}
      </RatingContainer>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
        <Button>
          <Text>Just to test</Text>
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default RestaurantInfoCard;
