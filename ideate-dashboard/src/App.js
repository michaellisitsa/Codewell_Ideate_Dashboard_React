import logo from "./logo.svg";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import ChartContainer from "./components/ChartContainer";
import "./App.css";
import Referral from "./components/Referral";
import Table from "./components/Table";
import makeData from "./utils/makeData";
import React from "react";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);
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
      <div class="table-container">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

export default App;
