import styled from 'styled-components/native';
import {elementColor} from '../../utils/elementColor';

export const PokemonCardContainer = styled.View`
  justify-content: space-between;
  height: 100px;
`;

export const PokemonName = styled.Text`
  color: white;
  font-size: 30px;
  text-transform: capitalize;
  font-weight: bold;
  margin: 10px 0;
`;

export const PokemonId = styled.Text`
  color: #4a604b;
`;

export const ElementIcon = styled.Image`
  height: 15px;
  width: 15px;
  margin-right: 8px;
`;

export const ElementContainer = styled.View`
  flex-direction: row;
`;

export const ElementBox = styled.View`
  background-color: ${props =>
    props.color ? elementColor[props.color] : elementColor.defaultColor};
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 3px;
  margin-right: 5px;
`;

export const ElementText = styled.Text`
  color: white;
  text-transform: capitalize;
`;
