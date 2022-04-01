import React from "react";
import Paginacion from "./Paginacion";
import Pokemon from "./Pokemon";

const ListaPokemones = (props) => {
    const {pokemons , page, setPage ,total} = props;

    const ultimaPagina =  () => {
        const siguientePagina = Math.max(page - 1, 0);
        setPage(siguientePagina)
    }
    const siguientePagina = () => {
        const siguientePagina = Math.min(page + 1, total);
        setPage(siguientePagina)
    }

    return (
        <div className="w-4/5 m-auto">
            <div className="container inline-flex justify-between gap-10 items-center">
                <h1 className="text-4xl text-white">POKEDEX</h1>
                <Paginacion
                pagina = {page + 1}
                totalPaginas = {total}
                clickIzquierdo = {ultimaPagina}
                clickDerecho = {siguientePagina}
                />
            </div>
            <div className="grilla mt-10 m-auto grid grid-cols-5 gap-10">
                {pokemons.map((pokemon, idx) => {
                    return (
                        <div>
                            <Pokemon pokemon={pokemon} key={pokemon.name} />
                        </div>
                    ) 
                })}
                </div>
        </div>
    )
}

export default ListaPokemones;