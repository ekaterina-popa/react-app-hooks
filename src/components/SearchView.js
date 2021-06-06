import React, { useCallback, useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { usePosts } from "../contexts/PostsContext";

const InputGroup = styled.div`
  width: 75%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;

const InputLabel = styled.label`
  padding: 7px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
`;

export default function SearchView() {
  const { search, setSearch } = usePosts();

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleClick = useCallback(() => setSearch(""), [setSearch]);

  return (
    <InputGroup>
      <InputLabel htmlFor="searchInput">Search post</InputLabel>
      <Input
        ref={searchRef}
        id="searchInput"
        type="text"
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <SearchButton onClick={handleClick} text="Clear" />
    </InputGroup>
  );
}

SearchView.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: gray;
`;

function SearchButton({ onClick, text, type = "button" }) {
  //console.log("render searchButton");
  return <Button onClick={onClick}>{text}</Button>;
}

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

memo(SearchButton);
