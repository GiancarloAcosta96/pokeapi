import React from "react";

const Cabecera = () => {

    let urlImagen = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <div>
            <header>
                <div className='h-[14vh]'>
                    <img className='m-auto p-4' src={urlImagen}/>
                </div>
            </header>
        </div>
    )
}

export default Cabecera;