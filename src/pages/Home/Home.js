import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import {Icon} from 'react-native-elements';
import API from '../../services/api';
import {SearchBar, SearchIcon, Description} from './style';

const Home = ({navigation}) => {
  const [pokemonList, setPokemonList] = useState();
  const [pokemonSearchInput, setPokemonSearchInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const fetchLimit = 6;

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(async () => {
    if (pokemonSearchInput.length > 3) {
      setIsSearching(true);
      const response = await API.getPokemonByName(pokemonSearchInput)
        .then(promise => promise)
        .catch(e => console.log(e));

      if (response) {
        setPokemonList([response]);
      }
    } else {
      getPokemons();
      setIsSearching(false);
    }
  }, [pokemonSearchInput]);

  const pokemonSearchHandler = event => {
    setPokemonSearchInput(event.nativeEvent.text);
  };

  const pokemonListRenderHandler = async () => {
    if (!isSearching) {
      const response = await API.getNextPokemonList();
      setPokemonList(pokemonList.concat(response));
    }
  };

  const getPokemons = async () => {
    const response = await API.getPokemonList(fetchLimit);
    setPokemonList(response);
  };

  return (
    <View style={{padding: 25, backgroundColor: 'white'}}>
      <View style={{position: 'relative'}}>
        <SearchBar
          onChange={e => pokemonSearchHandler(e)}
          placeholder="What Pokémon are you looking for?"
        />
        <SearchIcon>
          <Icon name="search" type="font-awesome" color="#747476" />
        </SearchIcon>
      </View>

      <Description>
        Search for Pokémon by name or using the National Pokédex number
      </Description>

      <FlatList
        data={pokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <PokemonCard
            key={item.id}
            pokemon={item}
            onPress={() => navigation.navigate('Details', item)}
          />
        )}
        contentContainerStyle={{paddingBottom: 80}}
        onEndReached={pokemonListRenderHandler}
      />
    </View>
  );
};

export default Home;
