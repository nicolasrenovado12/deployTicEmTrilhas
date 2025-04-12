import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [criador] = useState('Nicolas')

    const [Tarefas, setTarefas] = useState([
    ]);

    const [loadingCarregar, setLoadingCarregar] = useState(false);
    const [loadingCriar, setLoadingCriar] = useState(false);
    const [loadingEditar, setLoadingEditar] = useState(null);
    const [loadingDeletar, setLoadingDeletar] = useState(null);

    const carregarTarefas = async() => {
        setLoadingCarregar(true);

        const { data = [] } = await api.get('/tarefas')
        
        setTarefas([
            ...data
        ])

        setTimeout(setLoadingCarregar(false), 2000);
    }

    const adicionarTarefa = async (nomeTarefa) => {
        setLoadingCriar(true);
        const { data: tarefa } = await api.post('/tarefas', {
            nome: nomeTarefa
        });
        
        setTarefas(estadoAtual => {
            
            return [
                ...estadoAtual,
                tarefa,
            ]
        })
        setTimeout(setLoadingCriar(false), 2000); // In this case i am simulating the loading
    };

    const removerTarefa = async (idTarefa) => {
        setLoadingDeletar(idTarefa);
        const { data: tarefa } = await api.delete(`/tarefas/${idTarefa}`);
        
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id != idTarefa)

            return [
                ...tarefasAtualizadas
            ]
        })
        
        setTimeout(setLoadingDeletar(null), 2000);
    }

    const editarTarefa = async (idTarefa, nomeTarefa) => {
        setLoadingEditar(idTarefa);
        const { data: tarefaAtualizada } = await api.put(`/tarefas/${idTarefa}`, {
            nome: nomeTarefa
        });

        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id == idTarefa ? {
                    ...tarefa,
                    nome: tarefaAtualizada.nome,
                } : tarefa
            })

            return [
                ...tarefasAtualizadas
            ]
        })
        setTimeout(setLoadingEditar(null), 2000);
    }

    useEffect(() => {
        carregarTarefas();
    }, [])

    return (
        <AppContext.Provider value={{
            criador,
            Tarefas, 
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
            loadingCarregar, 
            setLoadingCarregar,
            loadingCriar,
            setLoadingCriar,
            loadingEditar, 
            setLoadingEditar,
            loadingDeletar, 
            setLoadingDeletar
        }}>
            {children}
        </AppContext.Provider>
    )
}
