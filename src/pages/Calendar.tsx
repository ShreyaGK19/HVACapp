
import { Calendar } from "@/components/ui/calendar";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-background text-foreground p-6 pb-24">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-semibold">Schedule</h1>
        <p className="text-muted-foreground">Set your temperature preferences</p>
      </header>

      <div className="grid gap-6">
        <section className="glass-panel p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border-0"
          />
        </section>

        <section className="glass-panel p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <h2 className="text-lg font-medium mb-4">Daily Schedule</h2>
          <div className="space-y-4">
            {[
              { time: "Morning (6:00 - 9:00)", temp: 22 },
              { time: "Day (9:00 - 17:00)", temp: 24 },
              { time: "Evening (17:00 - 22:00)", temp: 23 },
              { time: "Night (22:00 - 6:00)", temp: 20 },
            ].map((schedule) => (
              <div
                key={schedule.time}
                className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
              >
                <span className="text-sm">{schedule.time}</span>
                <span className="font-medium">{schedule.temp}°C</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Navigation />
    </div>
  );
};

export default CalendarPage;
