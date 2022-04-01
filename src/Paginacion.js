import React from "react";

const Paginacion = (props) => {

    const {clickDerecho, clickIzquierdo, pagina, totalPaginas} = props;

    return (
        <div className="inline-flex items-center gap-5">
            <button onClick={clickIzquierdo} className="text-4xl text-white">{'<'}</button>
            <div className="text-2xl text-white">{pagina} de {totalPaginas}</div>
            <button onClick={clickDerecho} className="text-4xl text-white">{'>'}</button>
        </div>
    )

}

export default Paginacion;