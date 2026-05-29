// src/components/Common/Navbar.jsx

export default function Navbar({
  setPage,
}) {

  if (!setPage) {
    return null;
  }

  return (

    <header className="bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() =>
            setPage("home")
          }
          className="flex items-center gap-4 cursor-pointer"
        >

          <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
            🌿
          </div>

          <div>

            <h1 className="text-3xl font-black text-gray-900">
              EcoTracker
            </h1>

            <p className="text-gray-500 text-sm">
              Save The Earth
            </p>

          </div>

        </div>

        {/* MENU */}
        <nav className="flex items-center gap-8">

          <button
            onClick={() =>
              setPage("home")
            }
            className="text-lg font-semibold text-gray-700 hover:text-green-600 transition"
          >
            Home
          </button>

          <button
            onClick={() =>
              setPage("tracker")
            }
            className="text-lg font-semibold text-gray-700 hover:text-green-600 transition"
          >
            Tracker
          </button>

          <button
            onClick={() =>
              setPage("dashboard")
            }
            className="text-lg font-semibold text-gray-700 hover:text-green-600 transition"
          >
            Dashboard
          </button>

          <button
            onClick={() =>
              setPage("leaderboard")
            }
            className="text-lg font-semibold text-gray-700 hover:text-green-600 transition"
          >
            Leaderboard
          </button>

        </nav>

      </div>

    </header>

  );
}