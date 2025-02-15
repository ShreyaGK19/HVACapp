
import { Calendar } from "@/components/ui/calendar";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTab, setSelectedTab] = useState("daily");

  const schedules = {
    daily: [
      { time: "Morning (6:00 - 9:00)", temp: 22 },
      { time: "Day (9:00 - 17:00)", temp: 24 },
      { time: "Evening (17:00 - 22:00)", temp: 23 },
      { time: "Night (22:00 - 6:00)", temp: 20 },
    ],
    weekly: [
      { day: "Monday", schedule: "Weekday" },
      { day: "Tuesday", schedule: "Weekday" },
      { day: "Wednesday", schedule: "Weekday" },
      { day: "Thursday", schedule: "Weekday" },
      { day: "Friday", schedule: "Weekday" },
      { day: "Saturday", schedule: "Weekend" },
      { day: "Sunday", schedule: "Weekend" },
    ]
  };

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
          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="daily">Daily Schedule</TabsTrigger>
              <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="daily" className="space-y-4">
              {schedules.daily.map((schedule) => (
                <div
                  key={schedule.time}
                  className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                >
                  <span className="text-sm">{schedule.time}</span>
                  <span className="font-medium">{schedule.temp}°C</span>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="weekly" className="space-y-4">
              {schedules.weekly.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                >
                  <span className="text-sm">{schedule.day}</span>
                  <span className="font-medium">{schedule.schedule}</span>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </section>

        <button 
          className="glass-button w-full p-4 animate-fade-in"
          style={{animationDelay: "0.3s"}}
          onClick={() => console.log('Copy schedule to other days')}
        >
          Copy Schedule to Other Days
        </button>
      </div>

      <Navigation />
    </div>
  );
};

export default CalendarPage;
