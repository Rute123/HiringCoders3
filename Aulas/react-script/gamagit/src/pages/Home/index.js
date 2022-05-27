import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
//import style from './style.css'; (arquivo local) 

//Componentes, Estados, e propriedades
// Em return controla o input
//Função handlePesquisa - lida com o button pesquisa fazendo requisição de dados do git por usuário

function App(props) {
    <h1>Página Inicial</h1>
    const [usuario, setUsuario] = useState('Rute')

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));

    }
    return ( 
    <>
    <p> { usuario } </p>  
        <S.Input className = "usuarioInput" placeholder = " Usuário " value = { usuario } onChange = { e => setUsuario(e.target.value) } /> 
        <S.Button type = "button" onClick = { handlePesquisa } > Pesquisar </S.Button> 
    </>
    );
}

export default App;