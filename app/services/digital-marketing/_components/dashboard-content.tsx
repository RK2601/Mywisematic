"use client";

import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const DashboardContent = () => {
  // Sample data for charts
  const trafficData = Array.from({ length: 12 }, (_, i) => ({
    name: `${i + 1}`,
    organic: Math.floor(Math.random() * 1000) + 500,
    paid: Math.floor(Math.random() * 800) + 300,
  }));

  const conversionData = [
    { name: "Social", value: 35 },
    { name: "Organic", value: 45 },
    { name: "Direct", value: 20 },
  ];

  const engagementData = Array.from({ length: 7 }, (_, i) => ({
    name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    value: Math.floor(Math.random() * 50) + 50,
  }));

  const COLORS = ["#2563eb", "#3b82f6", "#60a5fa"];

  return (
    <div className="grid grid-cols-12 gap-4 p-4 md:gap-6 md:p-8 bg-background/95 backdrop-blur-sm rounded-lg">
      {/* Header Stats */}
      <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 md:gap-6 md:mb-6">
        {[
          { label: "Total Traffic", value: "125.8K", change: "+12.3%" },
          { label: "Conversion Rate", value: "3.2%", change: "+0.8%" },
          { label: "Avg. Session", value: "4m 32s", change: "+0.5m" },
          { label: "Bounce Rate", value: "33.2%", change: "-2.1%" },
        ].map((stat, i) => (
          <div key={i} className="bg-muted/30 p-4 rounded-lg">
            <div className="text-sm text-muted-foreground">{stat.label}</div>
            <div className="text-2xl font-bold mt-1">{stat.value}</div>
            <div
              className={`text-sm mt-1 ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
            >
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Traffic Overview */}
      <div className="col-span-12 md:col-span-8 bg-muted/30 p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-4">Traffic Overview</h3>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trafficData}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip
                contentStyle={{
                  background: "rgba(0,0,0,0.8)",
                  border: "none",
                  borderRadius: "4px",
                }}
              />
              <Line
                type="monotone"
                dataKey="organic"
                stroke="#2563eb"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="paid"
                stroke="#60a5fa"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Conversion Sources */}
      <div className="col-span-12 md:col-span-4 bg-muted/30 p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-4">Traffic Sources</h3>
        <div className="h-[250px]">
          <ResponsiveContainer width="110%" height="100%">
            <PieChart>
              <Pie
                data={conversionData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {conversionData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="col-span-12 bg-muted/30 p-4 rounded-lg">
        <h3 className="text-sm font-medium mb-4">Weekly Engagement</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={engagementData}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip
                contentStyle={{
                  background: "rgba(0,0,0,0.8)",
                  border: "none",
                  borderRadius: "4px",
                }}
                cursor={{ fill: "none" }}
              />
              <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
