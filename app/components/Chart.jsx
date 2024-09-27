import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 200, 400],
  ["2014", 170, 460],
  ["2015", 660, 120],
  ["2016", 30, 540],
];

const options = {
  chart: {
    title: "Users Data",
    
  },
};

function App() {
  return (
    <Chart
     className="ml-5"
      chartType="Line"
      width="100vw"
      height="100vh"
      data={data}
      options={options}
    />
  );
}

export default App;