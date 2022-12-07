import './App.scss';
import DrumMachine from './components/drumMachine';
import { DrumProvider } from './context/context';

function App() {
  return (
    <DrumProvider>
      <div className="App">
        <DrumMachine />
        <div>
          Coded by
          <br />
          <a  href="https://github.com/sadikbarisyilmaz">sadikbarisyilmaz</a>
        </div>
      </div>
    </DrumProvider>
  );
}

export default App;
