
import { Bell, ChevronRight, Moon, Settings, Home, Thermometer, Zap, HelpCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const units = [
    { label: "Temperature", value: "Celsius" },
    { label: "Air Quality", value: "PM2.5" },
    { label: "Energy", value: "kWh" },
  ];

  const devices = [
    { name: "Living Room AC", location: "Living Room", status: "Connected" },
    { name: "Bedroom AC", location: "Master Bedroom", status: "Connected" },
    { name: "Kitchen AC", location: "Kitchen", status: "Offline" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 pb-24">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
        <p className="text-gray-500">Manage your preferences</p>
      </header>

      <div className="grid gap-6">
        <section className="bg-white rounded-2xl shadow-sm p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-2xl font-semibold text-purple-600">JD</span>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
          </div>
        </section>

        <Tabs defaultValue="settings" className="animate-fade-in" style={{animationDelay: "0.2s"}}>
          <TabsList className="grid w-full grid-cols-3 mb-4 bg-white">
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="units">Units</TabsTrigger>
          </TabsList>

          <TabsContent value="settings" className="space-y-4">
            {[
              { icon: Bell, label: "Notifications", href: "#" },
              { icon: Settings, label: "Preferences", href: "#" },
              { icon: Moon, label: "Dark Mode", href: "#" },
              { icon: HelpCircle, label: "Help & Support", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <button
                key={label}
                className="w-full bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => console.log(`Clicked ${label}`)}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="text-purple-600" size={20} />
                  <span className="text-gray-900">{label}</span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            ))}
          </TabsContent>

          <TabsContent value="devices" className="space-y-4">
            {devices.map((device) => (
              <div key={device.name} className="bg-white rounded-2xl shadow-sm p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{device.name}</h3>
                    <p className="text-sm text-gray-500">{device.location}</p>
                  </div>
                  <span className={`text-sm ${
                    device.status === "Connected" ? "text-green-500" : "text-red-400"
                  }`}>
                    {device.status}
                  </span>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="units" className="space-y-4">
            {units.map((unit) => (
              <div key={unit.label} className="bg-white rounded-2xl shadow-sm p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900">{unit.label}</span>
                  <span className="text-gray-500">{unit.value}</span>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        <button 
          className="w-full p-4 text-red-500 bg-white rounded-2xl shadow-sm mt-4 animate-fade-in hover:bg-red-50 transition-colors"
          style={{animationDelay: "0.3s"}}
          onClick={() => console.log('Logout clicked')}
        >
          Log Out
        </button>
      </div>

      <Navigation />
    </div>
  );
};

export default Profile;
