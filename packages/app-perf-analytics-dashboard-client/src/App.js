import './App.scss';
import MonitoringArea from "./components/MonitoringArea/MonitoringArea";
import Header from "./components/Header/Header";
import SearchFilters from "./components/SearchFilters/SearchFilters";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <div
        data-testid="header-badge"
        className="header-badge"
      />
      <div className="container">
        <Header
          title="PerfAnalytics Dashboard"
          subtitle="Dashboard for performance analytics visualization"
        />
        <Card>
          <SearchFilters />
        </Card>
        <MonitoringArea />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
