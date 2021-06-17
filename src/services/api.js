import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const API = {
  next: 0,
  async getPokemonList(amount) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${amount}`,
      );
      this.next = response.data.next;
      const pokemonsData = response.data.results;
      const singlePokemonData = await Promise.all(
        pokemonsData.map(
          async pokemon => await this.getSinglePokemon(pokemon.url),
        ),
      );

      return singlePokemonData;
    } catch (err) {
      console.log('Not Found');
    }
  },

  async getNextPokemonList() {
    try {
      const response = await axios.get(this.next);
      const pokemonData = await Promise.all(
        response.data.results.map(
          async pokemon => await this.getSinglePokemon(pokemon.url),
        ),
      );
      this.next = response.data.next;

      return pokemonData;
    } catch {
      console.log('Not Found');
    }
  },

  async getSinglePokemon(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.log('Not Found');
    }
  },

  async getPokemonByName(name) {
    try {
      const queryname = name.toLowerCase();
      const response = await axios.get(`${API_URL}/${queryname}`);
      return response.data;
    } catch (err) {
      console.log('Not found');
    }
  },
};

export default API;
