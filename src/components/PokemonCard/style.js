import styled from 'styled-components/native';
import {pokemonBackground} from '../../utils/pokemonBackground';

export const CardContainer = styled.ImageBackground`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props =>
    props.backgroundColor
      ? pokemonBackground[props.backgroundColor]
      : pokemonBackground.defaultColor};
  height: 150px;
  border-radius: 10px;
  margin: 15px 0;
  padding: 20px;
`;

export const PokemonSprite = styled.Image`
  width: 150px;
  height: 150px;
`;
