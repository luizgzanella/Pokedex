import styled from 'styled-components/native';
import {pokemonBackground} from '../../utils/pokemonBackground';

export const PokemonSprite = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Header = styled.ImageBackground`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 250px;
`;

export const DetailsContainer = styled.View`
  background-color: ${props =>
    props.backgroundColor
      ? pokemonBackground[props.backgroundColor]
      : pokemonBackground.defaultColor};
  flex: 1;
`;

export const StatsTitle = styled.Text`
  text-align: center;
  color: ${props =>
    props.color
      ? pokemonBackground[props.color]
      : pokemonBackground.defaultColor};
  font-weight: bold;
  font-size: 16px;
  margin: 20px;
`;

export const DetailContent = styled.View`
  ]flex: 1;
  background-color: #fff;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;
