
import './App.css';
import Buscador from './Buscador';
import ListaPokemones from './ListaPokemones';
import Cabecera from './Cabecera';
import { buscarPokemon, obtenerDatoPokemons, obtenerPokemons } from './api';
import React from 'react';

const {useState, useEffect} = React;


 export default function App() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [sinResultado, setSinResultado] = useState(false);
  
  const fetchPokemons = async () => {
    try {

      const data = await obtenerPokemons(25, 25*page);
      const promises = data.results.map(async (pokemon) => {
        return await obtenerDatoPokemons(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      
      setTotal(Math.ceil(data.count / 25));
      setSinResultado(false);
    } catch(error){ 

    }
  }
  useEffect(() =>{
    fetchPokemons();
  }, [page])

  const onBuscar = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }

    const resultado = await buscarPokemon(pokemon);
    if(!resultado) {
      setSinResultado(true);
      
      return;
    } else {
      setPokemons([resultado]);
      setPage(0);
      setTotal(1);
    }
    
  }


  return (
      <div className='fondo bg-gradient-to-r p-10 from-[#4A00E0] to-fuchsia-600'>
        <Cabecera></Cabecera>
        <Buscador onBuscar={onBuscar}/>
        {sinResultado ?
          <div className='text-white text-center text-3xl mt-6'>No se encontró el Pokemon</div>
        :
          <ListaPokemones 
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total= {total}
          />
          }
      </div>
  );
}

