import styled from 'styled-components/native';

export const SearchBar = styled.TextInput`
  background-color: #f2f2f2;
  border-radius: 10px;
  height: 60px;
  padding-left: 50px;
  font-size: 16px;
`;

export const SearchIcon = styled.View`
  z-index: 2000;
  margin-left: 15px;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
`;

export const Description = styled.Text`
  text-align: center;
  margin: 20px 0;
`;
