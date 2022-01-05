import './App.scss';
import MonitoringArea from "./components/MonitoringArea/MonitoringArea";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App container">
      <Header
        title="PerfAnalytics Dashboard"
        subtitle="Dashboard for performance analytics visualization"
      />
      <MonitoringArea />
    </div>
  );
}

export default App;
