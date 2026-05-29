import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Navbar({ setPage, page }) {

  const [open, setOpen] = useState(false);

  const goTo = (p) => {
    setPage(p);
    setOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b px-4 py-4">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Leaf className="text-green-600" />
          <span className="font-bold">EcoTracker</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-medium">
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("tracker")}>Tracker</button>
          <button onClick={() => goTo("dashboard")}>Dashboard</button>
          <button onClick={() => goTo("leaderboard")}>Leaderboard</button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 mt-4">

          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("tracker")}>Tracker</button>
          <button onClick={() => goTo("dashboard")}>Dashboard</button>
          <button onClick={() => goTo("leaderboard")}>Leaderboard</button>

        </div>
      )}

    </nav>
  );
}