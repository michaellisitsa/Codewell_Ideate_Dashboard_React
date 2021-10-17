import logo from "./logo.svg";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div
        className="navGraphReferral-container"
        id="navGraphReferral-container"
      >
        <Sidebar />
        <article className="graphReferral"></article>
      </div>
    </div>
  );
}

export default App;
