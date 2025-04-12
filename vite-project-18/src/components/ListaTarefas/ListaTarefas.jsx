import { useAppContext } from '../../hooks';
import { Loading } from '../Loading/Loading';
import style from './ListaTarefas.module.css'
import { ListaTarefasItem } from "./ListaTarefasItem";

const ListaTarefas = () => {
    const { Tarefas, loadingCarregar } = useAppContext();

    return (
        <ul className={style.ListaTarefas}>
          {loadingCarregar && ( 
            <p>
              Carregando...
              <Loading /> 
            </p>
          )}

          {!loadingCarregar && !Tarefas.length && (
            <p>Não há tarefas cadastradas</p>
          )}
          {Tarefas.map(item => <ListaTarefasItem 
          key={item.id}
          id={item.id}
          nome={item.nome} />)}  
        </ul>
    )
}

export { ListaTarefas }