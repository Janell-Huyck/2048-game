import './App.css';
import { GameProvider } from './contexts/gameContext';
import { SwipeProvider } from './contexts/swipeContext';
import Home from './pages/home/home.component';
import { useWindowSize } from './hooks/useWindowSize';

function App() {
  const { width, height } = useWindowSize();
  return (
    <GameProvider>
      <SwipeProvider>
          <Home  key={`${width}-${height}`} />
        </SwipeProvider>
    </GameProvider>
  );
}

export default App;
