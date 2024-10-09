import React, { useEffect, useState } from 'react';
import "./MenuPrincipal.css"

const MenuPrincipal = () => {

    return (
        <div >
            <h2 className='Titulo'>Digite abaixo as informacoes da opcao que deseja pesquisar:</h2>
            <div className='Digitacao'>
                <div className='Local_digitacao_nome'>
                    <h3>Nome da opcao:</h3>
                    <input type="number" className='Input' />
                </div>
                <div className='Local_digitacao_data'>
                    <h3>Intervalo de datas das opcoes:</h3>
                    <h5>Inicio:<input type="date" className='Input_data' /></h5>
                    <h5>Fim<input type="date" className='Input_data' /></h5>
                </div>
            </div>
        </div>
    );
};

export default MenuPrincipal;