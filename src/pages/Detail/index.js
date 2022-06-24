import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import Detail from '../../components/Detail';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setPokemonData(response);
      })
      .catch((error) => {
        console.log("Error: ", error);
        alert("Error al cargar la informacion del pokemon. Intente de nuevo")
      })
  }, [])

  return (
    <div className='flex items-center justify-around'>
      <Detail
        data={pokemonData}
      />
    </div>
  )
}

export default PokemonDetail;
