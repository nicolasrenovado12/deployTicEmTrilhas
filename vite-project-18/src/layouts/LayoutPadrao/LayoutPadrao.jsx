import { Outlet } from "react-router-dom"

import { Cabecalho, Conteudo, Rodapé } from "../../components"
import { useAppContext } from "../../hooks";

const LayoutPadrao = () => {
    const {criador} = useAppContext();
    return ( 
    <>
    <Cabecalho nomeUsuario="Joana " /> 
    <Conteudo>
      <Outlet />
    </Conteudo>
    <Rodapé CriadorDoProjeto={criador}/>
   </>
    )
}

export { LayoutPadrao }