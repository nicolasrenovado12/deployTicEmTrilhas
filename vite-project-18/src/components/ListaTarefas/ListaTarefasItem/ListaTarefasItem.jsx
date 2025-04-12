import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO } from '../../Botao';
import { CampoTexto } from '../../CampoTexto'
import style from './ListaTarefasItem.module.css'
import { Loading } from '../../Loading/Loading';

const ListaTarefasItem = (props) => {
    const { id, nome } = props;

    const { loadingEditar, loadingDeletar, editarTarefa, removerTarefa } = useAppContext()

    const [estaEditando, setEstaEditando] = useState(false)

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value

        editarTarefa(id, nomeTarefa)

        setEstaEditando(false)
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return (
        <li className={style.ListaTarefasItem}>
         {(loadingEstaEditando || estaEditando) && (
            <CampoTexto 
            defaultValue={nome}
            onBlur={onBlurTarefa}
            autoFocus={() => setEstaEditando(true)}
            />
         )}
         {(!loadingEstaEditando && !estaEditando) && (
            <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
         )}

         {loadingEstaEditando && (
          <Loading />  
         )}

         <Botao
         texto={loadingEstaDeletando ? <Loading /> : '-'}
         tipo={TIPO_BOTAO.SECUNDARIO}
         onClick={() => removerTarefa(id)}
         />
        </li>
    )
}

export { ListaTarefasItem }