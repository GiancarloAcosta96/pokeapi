import React from "react";
const {useState} = React;

const Buscador = (props) => {

    const {onBuscar} = props;
    const [buscar, setBuscar] = useState("");

    const onChange = (evento) => {
        setBuscar(evento.target.value);
        if(evento.target.value.lenght === 0) {
            onBuscar(null);
        }
    }

    const onClick = async (e) => { 
        onBuscar(buscar)
    }

    return (
        <div>
            <div className="w-full">
                <div className="contenedor-input w-full gap-5 inline-flex justify-center p-5">
                    <input 
                    className="grid w-1/5 bg-transparent text-white outline-none border-b-2 border-red-600 text-lg" 
                    placeholder="Buscar pokemon"
                    onChange={onChange}
                    />
                    <button onClick={onClick} 
                    className="p-3 px-8 text-lg rounded-2xl active:bg-blue-700 active:shadow-none bg-[#0523e4] shadow-lg shadow-black-500/25 text-white"
                    >Buscar
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Buscador;
