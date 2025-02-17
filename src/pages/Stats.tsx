
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const tempData = [
  { name: "Mon", value: 21 },
  { name: "Tue", value: 22 },
  { name: "Wed", value: 20 },
  { name: "Thu", value: 23 },
  { name: "Fri", value: 21 },
  { name: "Sat", value: 19 },
  { name: "Sun", value: 20 },
];

const comfortData = [
  { name: "Comfortable", value: 65, color: "#22c55e" },
  { name: "Slightly Cool", value: 20, color: "#3b82f6" },
  { name: "Slightly Warm", value: 15, color: "#ef4444" },
];

const happinessData = [
  { value: 92, color: "#22c55e" },
  { value: 8, color: "#f3f4f6" }, // Light gray background for the semi-circle
];

const Stats = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 pb-24">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-semibold text-gray-900">Statistics</h1>
        <p className="text-gray-500">Energy usage and savings</p>
      </header>

      <div className="grid gap-6">
        <section className="bg-white rounded-2xl shadow-sm p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Temperature</h2>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={tempData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8b5cf6" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Energy Usage</h3>
            <div className="text-3xl font-semibold text-purple-600">
              245 kWh
            </div>
            <p className="text-sm text-gray-500 mt-2">
              -12% from last month
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Cost Savings</h3>
            <div className="text-3xl font-semibold text-green-600">
              $34.50
            </div>
            <p className="text-sm text-gray-500 mt-2">
              This month's savings
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Comfort Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={comfortData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {comfortData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {comfortData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-sm text-gray-700">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Happiness Level</h2>
          <div className="h-[200px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={happinessData}
                  cx="50%"
                  cy="100%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {happinessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-4xl font-bold text-green-600">92%</span>
              <p className="text-sm text-gray-500 mt-1">Happy</p>
            </div>
          </div>
        </section>
      </div>

      <Navigation />
    </div>
  );
};

export default Stats;
