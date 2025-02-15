
import { useState } from "react";
import { ArrowUp, ArrowDown, Sun, Cloud } from "lucide-react";
import Navigation from "@/components/Navigation";

const rooms = [
  { id: 1, name: "Living Room", temp: 21, humidity: 45 },
  { id: 2, name: "Bedroom", temp: 20, humidity: 50 },
  { id: 3, name: "Kitchen", temp: 22, humidity: 40 },
];

const Index = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [temperature, setTemperature] = useState(21);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 pb-24">
      <header className="flex justify-between items-center mb-8 animate-fade-in">
        <div>
          <h1 className="text-2xl font-semibold">Climate Control</h1>
          <p className="text-muted-foreground">Welcome back</p>
        </div>
        <div className="flex items-center space-x-2">
          <Sun className="text-yellow-500" size={24} />
          <span className="text-lg">24°C</span>
        </div>
      </header>

      <div className="grid gap-6">
        <section className="glass-panel p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">{selectedRoom.name}</h2>
            <span className="text-sm text-muted-foreground">
              Humidity: {selectedRoom.humidity}%
            </span>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-highlight/10 rounded-full animate-float"></div>
              <div className="text-5xl font-semibold">{temperature}°</div>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => setTemperature(t => t - 1)}
                className="glass-button p-4"
              >
                <ArrowDown size={24} />
              </button>
              <button 
                onClick={() => setTemperature(t => t + 1)}
                className="glass-button p-4"
              >
                <ArrowUp size={24} />
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(room)}
              className={`glass-panel p-4 text-left transition-all duration-300 ${
                selectedRoom.id === room.id
                  ? "border-highlight/50 bg-highlight/5"
                  : "hover:bg-white/5"
              }`}
            >
              <h3 className="font-medium">{room.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-2xl">{room.temp}°</span>
                <span className="text-sm text-muted-foreground">
                  {room.humidity}%
                </span>
              </div>
            </button>
          ))}
        </section>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;
