import { Link } from 'react-router-dom';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isMobile } from 'react-device-detect';

export default function Home() {
  return (
    <div className={`container ${!isMobile || 'mt-4 panel w-75'}`}>
      <div className='row'>
        <div
          className={
            isMobile
              ? 'offset-1 col-10 mt-4 p-3'
              : 'offset-3 col-6 mt-4 p-5 panel'
          }
        >
          <h2>Bem vindo(a) ao Sueca Online</h2>
          <center>
            <Link to='/game' className='btn btn-primary'>
              Jogar
            </Link>
            <Link to='/rules' className='btn btn-secondary'>
              Editar regras
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
}
