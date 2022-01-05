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
  const {dataset, strokeColor, fillColor} = props;
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
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type="monotone" dataKey="FCP" stroke={strokeColor} fill={fillColor}/>
      </AreaChart>
    </ResponsiveContainer>
  );
}
