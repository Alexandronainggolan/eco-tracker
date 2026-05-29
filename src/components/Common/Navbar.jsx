import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Navbar({ setPage }) {
  const [open, setOpen] = useState(false);

  const goTo = (page) => {
    setPage(page);
    setOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 px-4 sm:px-6 py-4">

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-xl">
            <Leaf className="text-green-600" />
          </div>

          <div>
            <h1 className="font-black text-lg sm:text-xl text-gray-800">
              EcoTracker
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">
              Energi Baik untuk Bumi
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <button onClick={() => goTo("landing")} className="hover:text-green-600">Home</button>
          <button onClick={() => goTo("tracker")} className="hover:text-green-600">Tracker</button>
          <button onClick={() => goTo("dashboard")} className="hover:text-green-600">Dashboard</button>
          <button onClick={() => goTo("leaderboard")} className="hover:text-green-600">Leaderboard</button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-gray-700 font-medium">

          <button onClick={() => goTo("landing")} className="text-left hover:text-green-600">
            Home
          </button>

          <button onClick={() => goTo("tracker")} className="text-left hover:text-green-600">
            Tracker
          </button>

          <button onClick={() => goTo("dashboard")} className="text-left hover:text-green-600">
            Dashboard
          </button>

          <button onClick={() => goTo("leaderboard")} className="text-left hover:text-green-600">
            Leaderboard
          </button>

        </div>
      )}

    </nav>
  );
}