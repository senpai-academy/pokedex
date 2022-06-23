import React, { useEffect, useState } from 'react';
import PokemonList from '../../components/PokemonList';

const Home = () => {
  const [pokemones, setPokemones] = useState([]);

  // useEffect(() => {
  //   // Creo un arreglo nuevo donde van a estar los pokemones
  //   // const pokemonesTemporal = [];
  //   for(let codigo = 1; codigo <= 20; codigo ++) {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${codigo}`)
  //       .then((response) => response.json())
  //       .then((pokemon) => {
  //         // Agrego el nuevo pokemon al arreglo
  //         // pokemonesTemporal.push(pokemon);
  //         setPokemones([...pokemones, pokemon]);
  //       })
  //       .catch((error) => {
  //         console.log("Error: ", error);
  //         alert("Error al consultar el pokemon, intentalo nuevamente.")
  //       })
  //   }
  //   //Al final, luego de consultar todos los pokemones los guardo en el estado
  //   // setPokemones(pokemonesTemporal);
  // }, [])

  useEffect(() => {
    fetch('https://us-central1-senpai-9b555.cloudfunctions.net/getFullList')
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemones(pokemon);
      })
      .catch((error) => {
        console.log("Error: ", error);
        alert("Error al consultar el pokemon, intentalo nuevamente.")
      })
  }, [])

  return (
    <>
      <PokemonList
        data={pokemones}
      />
    </>
  )
}

export default Home;
