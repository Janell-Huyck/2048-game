import './App.css';
import { GameProvider } from './contexts/gameContext';
import { SwipeProvider } from './contexts/swipeContext';
import Home from './pages/home/home.component';

function App() {
  return (
    <SwipeProvider>
      <GameProvider>
        <Home/>
      </GameProvider>
    </SwipeProvider>
  );
}

export default App;
