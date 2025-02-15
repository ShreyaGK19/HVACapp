
import { Bell, ChevronRight, Moon, Settings } from "lucide-react";
import Navigation from "@/components/Navigation";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 pb-24">
      <header className="mb-8 animate-fade-in">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-muted-foreground">Manage your preferences</p>
      </header>

      <div className="grid gap-6">
        <section className="glass-panel p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-highlight/20 flex items-center justify-center">
              <span className="text-2xl font-semibold">JD</span>
            </div>
            <div>
              <h2 className="text-lg font-medium">John Doe</h2>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
        </section>

        <section className="space-y-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
          {[
            { icon: Bell, label: "Notifications", href: "#" },
            { icon: Settings, label: "Preferences", href: "#" },
            { icon: Moon, label: "Dark Mode", href: "#" },
          ].map(({ icon: Icon, label, href }) => (
            <button
              key={label}
              className="w-full glass-panel p-4 flex items-center justify-between"
              onClick={() => console.log(`Clicked ${label}`)}
            >
              <div className="flex items-center space-x-3">
                <Icon className="text-muted-foreground" size={20} />
                <span>{label}</span>
              </div>
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          ))}
        </section>

        <button 
          className="glass-button w-full p-4 text-red-400 mt-4 animate-fade-in"
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
