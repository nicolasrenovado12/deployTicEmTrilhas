import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css';

const Cabecalho = () => {
    return (
        <div className={style.Cabecalho}>
          <Link to="/">
          <h1>
            <span>Todo</span>
            List
          </h1>
          </Link>
          <Link to="/sobre-nos"><h1>Sobre Nós</h1></Link>
        </div>

        
    );
}; 

export { Cabecalho };