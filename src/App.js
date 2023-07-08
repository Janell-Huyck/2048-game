import './App.css';
import { GameProvider } from './contexts/gameContext';
import { SwipeProvider } from './contexts/swipeContext';
import Home from './pages/home/home.component';

function App() {
  return (
    <GameProvider>
      <SwipeProvider>
          <Home/>
        </SwipeProvider>
    </GameProvider>
  );
}

export default App;
