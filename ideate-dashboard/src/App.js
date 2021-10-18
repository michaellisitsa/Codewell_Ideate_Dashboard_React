import logo from "./logo.svg";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import ChartContainer from "./components/ChartContainer";
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
          <ChartContainer />
          <Referral />
        </article>
      </div>
    </div>
  );
}

export default App;
