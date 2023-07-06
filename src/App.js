import './App.css';
import { GameProvider } from './contexts/gameContext';
import { OverlaysProvider } from './contexts/overlaysContext';
import { SwipeProvider } from './contexts/swipeContext';
import Home from './pages/home/home.component';

function App() {
  return (
    
    <GameProvider>
      <SwipeProvider>
        <OverlaysProvider>
          <Home/>
        </OverlaysProvider>
        </SwipeProvider>
    </GameProvider>

  );
}

export default App;
