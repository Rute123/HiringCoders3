import React, { useEffect, useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
//Uma página que lista os repositórios

export default function Repositories() {
        const history = useHistory();
        const [ repositories, setRepositories ] = useState([]);

        useEffect(() => {
            let repositoriesName = localStorage.getItem('repositoriesName');
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);

            /*Para evitar erro de atualização mas não funciona
            if(repositoriesName == false){
                    localStorage.clear();
            } else{
                history.push('/');
            }*/

        }, []);

        return ( 
            <S.Container>
                <S.Title> Repositórios </S.Title>
                 <S.List>
                     { repositories.map(repository => {
                         return(
                         <S.ListItem>Repositório: { repository }</S.ListItem> 
                         )
                    }) }
                </S.List>
                <S.LinkHome to = "/"> Voltar</S.LinkHome>
            </S.Container>
    )
}
