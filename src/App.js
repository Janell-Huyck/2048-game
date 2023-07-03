import './App.css';
import { GameProvider } from './contexts/gameContext';
import Home from './pages/home/home.component';

function App() {
  return (
    <GameProvider>
      <Home/>
    </GameProvider>
  );
}

export default App;
