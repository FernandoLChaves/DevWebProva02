import { useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return <div>
      <h1>Bem Vindo ao ConnectBook</h1>
        <h3>Gerencie e Vizualize seus Contatos de Forma Prática!</h3>
        <button onClick={() => navigate('/contatos')}>Acessar Contatos</button>
    </div>;
}

export default Home;
