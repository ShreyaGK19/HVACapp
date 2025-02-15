
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const data = [
  { name: "Mon", value: 21 },
  { name: "Tue", value: 22 },
  { name: "Wed", value: 20 },
  { name: "Thu", value: 23 },
  { name: "Fri", value: 21 },
  { name: "Sat", value: 19 },
  { name: "Sun", value: 20 },
];

const Stats = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 pb-24">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-semibold">Statistics</h1>
        <p className="text-muted-foreground">Energy usage and savings</p>
      </header>

      <div className="grid gap-6">
        <section className="glass-panel p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
          <h2 className="text-lg font-medium mb-4">Weekly Temperature</h2>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#9b87f5" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <div className="glass-panel p-6">
            <h3 className="text-lg font-medium mb-4">Energy Usage</h3>
            <div className="text-3xl font-semibold text-highlight">
              245 kWh
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              -12% from last month
            </p>
          </div>

          <div className="glass-panel p-6">
            <h3 className="text-lg font-medium mb-4">Cost Savings</h3>
            <div className="text-3xl font-semibold text-green-500">
              $34.50
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              This month's savings
            </p>
          </div>
        </section>
      </div>

      <Navigation />
    </div>
  );
};

export default Stats;
