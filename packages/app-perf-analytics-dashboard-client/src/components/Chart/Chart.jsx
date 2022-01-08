import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


export default function App(props) {
  const {dataset, datakey, strokeColor,strokeWidth, fillColor} = props;
  return (
    <ResponsiveContainer>
      <AreaChart
        data={dataset}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
        strokeWidth={strokeWidth}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="xAxisLabel"/>
        <YAxis/>
        <Tooltip/>
        <Area type="monotone" dataKey={datakey} stroke={strokeColor} fill={fillColor}/>
      </AreaChart>
    </ResponsiveContainer>
  );
}
