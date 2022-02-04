import A from "./components/A";
import B from "./components/B";
import './app.css';

function App() {
  return (
    <div className="app component">
      <h1>App (root)</h1>
      <div className='content'>
        <A/>
        <B/>
      </div>
    </div>
  );
}

export default App;
