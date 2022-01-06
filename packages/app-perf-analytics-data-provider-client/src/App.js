import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DATA PROVIDER APP</h1>
        <p>This app created for providing real data to related API</p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          href="https://app-perf-analytics.herokuapp.com"
        >
          ◄ Back To <strong>PerfAnalytics Dashboard App</strong>
        </a>
      </header>
    </div>
  );
}

export default App;
