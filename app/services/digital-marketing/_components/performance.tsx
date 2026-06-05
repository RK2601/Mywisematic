import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface GraphData {
  month: string;
  value: number;
}

export const PerformanceGraph = ({ data }: { data: GraphData[] }) => (
  <div className="h-48 w-full mt-4">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="month" hide />
        <YAxis hide domain={[0, 100]} />
        <Tooltip
          contentStyle={{
            background: "rgba(0,0,0,0.8)",
            border: "none",
            borderRadius: "4px",
            padding: "8px",
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={2}
          dot={false}
          animationDuration={2000}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
