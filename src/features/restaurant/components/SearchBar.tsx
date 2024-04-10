import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #dba979;
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
