import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../styles/Chart.css";

const data = (canvas) => {
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 30, 0, 200);
  gradient.addColorStop(0, "rgba(231, 255, 248, 1)");
  gradient.addColorStop(1, "rgba(231, 255, 248, 0)");

  return {
    labels: ["January", "February", "March", "April", "May", "June", "August"],
    datasets: [
      {
        label: "Reports Generated",
        fill: "start",
        lineTension: 0.5,
        backgroundColor: gradient,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 80, 30],
      },
    ],
  };
};

export default class Chart extends React.Component {
  render() {
    return (
      <div className="chart-js-container">
        <Line
          data={data}
          options={{
            legend: {
              display: false,
            },
            response: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}
