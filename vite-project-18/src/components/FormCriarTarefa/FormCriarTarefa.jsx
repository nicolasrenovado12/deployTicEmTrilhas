import { useState } from "react";
import { Botao, TIPO_BOTAO } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import style from   './FormCriarTarefa.module.css'
import { useAppContext } from "../../hooks";
import { Loading } from "../Loading/Loading";

const FormCriarTarefa = (props) => {
    const { loadingCriar, adicionarTarefa } = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('Valor Padrão');

    const onChangeNomeTarefa = (event) => {
        setNomeTarefa(event.currentTarget.value)
    };

    const submeterFormulario = (event) => {
        event.preventDefault();
        
        if(!nomeTarefa) {
            return;
        }

        adicionarTarefa(nomeTarefa)
        
        setNomeTarefa('') // Return in normal state
    };

    return (
        <form className={style.FormCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa}/>
            
            <Botao texto={loadingCriar ? <Loading /> : '+'} />
        </form>
    );
}

export { FormCriarTarefa }