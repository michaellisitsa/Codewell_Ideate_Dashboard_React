import logo from "./logo.svg";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import "./App.css";
import Referral from "./components/Referral";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div
        className="navGraphReferral-container"
        id="navGraphReferral-container"
      >
        <Sidebar />
        <article className="graphReferral">
          <Chart />
          <Referral />
        </article>
      </div>
    </div>
  );
}

export default App;
