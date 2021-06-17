import React from 'react';
import {TouchableOpacity} from 'react-native';
import PokemonInfoCard from '../PokemonInfoCard/PokemonInfoCard';
import {CardContainer, PokemonSprite} from './style';
import background from '../../assets/img/background-card.png';

const PokemonCard = ({pokemon, onPress}) => {
  const pokemonColor = pokemon.types[0].type.name;
  const pokemonSprite =
    pokemon.sprites.other['official-artwork']['front_default'];

  return (
    <TouchableOpacity onPress={onPress}>
      <CardContainer source={background} backgroundColor={pokemonColor}>
        <PokemonInfoCard
          name={pokemon.name}
          id={pokemon.id}
          types={pokemon.types}
        />
        <PokemonSprite
          source={{
            uri: pokemonSprite,
          }}
        />
      </CardContainer>
    </TouchableOpacity>
  );
};

export default PokemonCard;
