import style from './Rodape.module.css'

const Rodapé = (props) => {
    const { CriadorDoProjeto } = props;

    const anoAtual = (new Date()).getFullYear();

    return (
        <footer className={style.Rodapé}>
            <p>React básico - {anoAtual} - {CriadorDoProjeto}</p>
        </footer>
     );
}

export { Rodapé }