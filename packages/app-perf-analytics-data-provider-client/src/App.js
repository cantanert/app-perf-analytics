import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DATA PROVIDER APP</h1>
        <p>This app created for providing real data to related API</p>
        <a
          href="https://app-perf-analytics.herokuapp.com"
        >
          ⬅ <span> Click for back to <strong>PerfAnalytics Dashboard App</strong></span>
        </a>
        <a
          href="https://app-perf-analytics.herokuapp.com/data-provider-client"
        >
          🔄 <span> Click to refresh for <strong>More Analytics Data</strong></span>
        </a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
