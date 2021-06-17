import React, {useEffect} from 'react';
import PokemonInfoCard from '../../components/PokemonInfoCard/PokemonInfoCard';
import Stats from '../../components/Stats/Stats';
import {
  PokemonSprite,
  Header,
  DetailsContainer,
  DetailContent,
  StatsTitle,
} from './style';
import backgroundImage from '../../assets/img/patterns/details.png';
import {pokemonBackground} from '../../utils/pokemonBackground';

const PokemonDetail = ({route, navigation}) => {
  const POKEMON_INFO = route.params;
  const pokemonColor = POKEMON_INFO.types[0].type.name;
  const pokemonSprite =
    POKEMON_INFO.sprites.other['official-artwork']['front_default'];

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: pokemonBackground[pokemonColor],
      },
    });
  }, []);

  return (
    <DetailsContainer backgroundColor={pokemonColor}>
      <Header source={backgroundImage} resizeMode="contain">
        <PokemonSprite
          source={{
            uri: pokemonSprite,
          }}
        />
        <PokemonInfoCard
          name={POKEMON_INFO.name}
          id={POKEMON_INFO.id}
          types={POKEMON_INFO.types}
        />
      </Header>
      <DetailContent>
        <StatsTitle color={pokemonColor}>Stats</StatsTitle>
        {POKEMON_INFO.stats.map(info => (
          <Stats
            value={info.base_stat}
            name={info.stat.name}
            key={info.stat.name}
          />
        ))}
      </DetailContent>
    </DetailsContainer>
  );
};

export default PokemonDetail;
