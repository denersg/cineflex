import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Sessoes(){
    const { idFilme } = useParams();
    const [sessao, setSessao] = useState([]);

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);

        promessa.then(resposta => {
            setSessao(resposta.data.days);
        });
    }, []);

    for(let i = 0; i < sessao.length; i++){
        console.log(sessao[i]);
    }

    return(
        <div className="conteudo">
            <header className="topo">CINEFLEX</header>

            <div className="topo-status">
                Selecione o horário
            </div>

            <div className="dia-da-semana1">
                <span>Quinta-feira - </span>
            </div>
            <div className="data-sessao">
                <span>24/06/2021{sessao.id}</span>
            </div>

            <button className="horario">15:00</button>
            <button className="horario2">19:00</button>
            
        </div>
    );
}


// AQUI, QUEM VAI VIR VAI SER O LINK https://mock-api.driven.com.br/api/v4/cineflex/movies/1/showtimes