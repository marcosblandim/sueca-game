import { Link } from 'react-router-dom';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='offset-3 col-6 mt-4 p-5 panel'>
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
