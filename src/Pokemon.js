import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props;
    console.log(pokemon)
    return (
        <div className="cartillaPokemon cursor-pointer active:shadow-none shadow-lg shadow-gray-700/20 bg-white rounded-2xl p-8">
            <div className="pokemonImagen">
                <img className="w-36 h-36 m-auto"
                src={pokemon.sprites.front_default} 
                alt={pokemon.name} />
            </div>
            <div>
                <div>
                    <h2 className="font-semibold  text-center capitalize text-2xl">{pokemon.name}</h2>
                    <h2 className="text-2xl font-semibold text-center rounded-full bg-green-500">Exp: {pokemon.base_experience}</h2>
                    <h2 className="text-center text-xl">Tipo: {pokemon.types[0].type.name}</h2>
                    <h2 className="text-center text-xl">Peso: {pokemon.weight} kg.</h2>
                    <h2 className="text-center text-xl">Altura: {pokemon.height}m</h2>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;