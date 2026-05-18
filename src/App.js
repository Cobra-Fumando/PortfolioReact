import './App.css';
import Apresentacao from './components/Apresentacao';
import Sobre from './components/SobreMim'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <Apresentacao />
      <Sobre />
      <div className='Portfolio'>
        <Habilidades />
        <Projetos />
      </div>
      <Contato />
    </div>
  );
}

export default App;
