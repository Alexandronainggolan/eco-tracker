import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Navbar({ setPage, page }) {

  const [open, setOpen] = useState(false);

  const goTo = (p) => {
    setPage(p);
    setOpen(false);
  };

  const linkClass = (p) =>
    `hover:text-green-600 transition ${
      page === p ? "text-green-600 font-bold" : ""
    }`;

  return (
    <nav className="w-full bg-white shadow-sm border-b px-4 py-4">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Leaf className="text-green-600" />
          <span className="font-bold">EcoTracker</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-medium">

          <button onClick={() => goTo("home")} className={linkClass("home")}>
            Home
          </button>

          <button onClick={() => goTo("tracker")} className={linkClass("tracker")}>
            Tracker
          </button>

          <button onClick={() => goTo("dashboard")} className={linkClass("dashboard")}>
            Dashboard
          </button>

          <button onClick={() => goTo("leaderboard")} className={linkClass("leaderboard")}>
            Leaderboard
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 mt-4">

          <button onClick={() => goTo("home")} className={linkClass("home")}>
            Home
          </button>

          <button onClick={() => goTo("tracker")} className={linkClass("tracker")}>
            Tracker
          </button>

          <button onClick={() => goTo("dashboard")} className={linkClass("dashboard")}>
            Dashboard
          </button>

          <button onClick={() => goTo("leaderboard")} className={linkClass("leaderboard")}>
            Leaderboard
          </button>

        </div>
      )}

    </nav>
  );
}