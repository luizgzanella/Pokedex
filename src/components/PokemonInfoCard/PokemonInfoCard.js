import React from 'react';
import {icons} from '../../utils/elementIcons';
import {pokemonIdManager} from '../../utils/pokemonIdManager';
import {
  ElementIcon,
  ElementContainer,
  ElementText,
  ElementBox,
  PokemonName,
  PokemonId,
  PokemonCardContainer,
} from './style';

const PokemonInfoCard = ({name, id, types}) => {
  return (
    <PokemonCardContainer>
      <PokemonId>{pokemonIdManager(id)}</PokemonId>
      <PokemonName>{name}</PokemonName>
      <ElementContainer>
        {types.map((element, index) => (
          <ElementBox key={index} color={element.type.name}>
            <ElementIcon
              source={icons[element.type.name]}
              resizeMode="contain"
            />
            <ElementText>{element.type.name}</ElementText>
          </ElementBox>
        ))}
      </ElementContainer>
    </PokemonCardContainer>
  );
};

export default PokemonInfoCard;
