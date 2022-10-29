import React from "react";
import "./index.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ Data, Label,dimensions }) => {
  const data = [];

  Data && Label && Data.forEach((element, index) => {
    data.push({ name: Label[index], uv: element });
  });


  return (
    <div className="chart">
      <ResponsiveContainer width="100%">
        <AreaChart
           
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            width={dimensions.widthLineal}
            height={dimensions.height}
          />
          <XAxis
            dataKey="name"
            width={dimensions.widthLineal}
            height={dimensions.heigth}
          />
          <YAxis     width={dimensions.width} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
