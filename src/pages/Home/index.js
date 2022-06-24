import React, { useEffect, useState } from 'react';
import PokemonList from '../../components/PokemonList';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  const [pokemones, setPokemones] = useState([]);
  const [criteria, setCriteria] = useState("");
  const [isSortedByName, setIsSortedByName] = useState(false);
  const NUMBER_POKEMONS = 25;

  useEffect(() => {
    fetchPokemones();
    sortByNumber();
  }, [])

  const fetchPokemones = () => {
    // Creo un arreglo nuevo donde van a estar los pokemones
    // const pokemonesTemporal = [];
    for(let codigo = 1; codigo <= NUMBER_POKEMONS; codigo ++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${codigo}`)
        .then((response) => response.json())
        .then((pokemon) => {
          // Agrego el nuevo pokemon al arreglo
          // pokemonesTemporal.push(pokemon);
          setPokemones(pokemones => [...pokemones, pokemon]);
        })
        .catch((error) => {
          console.log("Error: ", error);
          alert("Error al consultar el pokemon, intentalo nuevamente.")
        })
    }
    //Al final, luego de consultar todos los pokemones los guardo en el estado
    // setPokemones(pokemonesTemporal);
  }

  const sortByNumber = () => {
    const numAscending = [...pokemones].sort((a,b) =>
      a.id - b.id
    );
    setPokemones(numAscending)
    setIsSortedByName(false);
  }

  const sortByName = () => {
    const strAscending = [...pokemones].sort((a,b) => 
      a.name < b.name ? -1 : 1
    );
    setPokemones(strAscending)
    setIsSortedByName(true);
  }

  return (
    <>
      {isSortedByName ? 
        <i className="fa-solid fa-arrow-down-1-9" onClick={() => sortByNumber()}></i> : 
        <i className="fa-solid fa-arrow-down-a-z" onClick={() => sortByName()}></i>}
      <SearchBar
        handleChange={setCriteria}
        placeholder="Busca tu pokemon"
        value={criteria}
      />
      <PokemonList
        data={pokemones.filter((pokemon) => criteria !=='' ? String(pokemon.name).toLowerCase().match(criteria.toLowerCase()) : pokemon)}
      />
    </>
  )
}

export default Home;
