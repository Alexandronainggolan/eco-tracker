import { useEffect, useState } from "react";

import Layout from "./components/Common/Layout";
import TrackerForm from "./components/Tracker/TrackerForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Leaderboard from "./components/Leaderboard/Leaderboard";

import { DEFAULT_FORM_DATA } from "./utils/constants";

import {
  saveTrackerData,
  getTrackerData,
} from "./services/localStorageService";

import { calculateCarbonFootprint } from "./services/carbonCalculator";

import { getEcoTip } from "./utils/ecoTips";

import { supabase } from "./services/supabase";

function App() {
  const [session, setSession] = useState(null);
  const [page, setPage] = useState("home");

  const [formData, setFormData] = useState(
    getTrackerData() || DEFAULT_FORM_DATA
  );

  const [result, setResult] = useState({
    totalEmission: 0,
    reducedCO2: 0,
    score: 0,
    status: "",
    tip: "",
  });

  // AUTH
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } =
      supabase.auth.onAuthStateChange((event, session) => {
        setSession(session);
        if (session) setPage("home"); // FIX: auto ke home setelah login
      });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // SAVE LOCAL
  useEffect(() => {
    saveTrackerData(formData);
  }, [formData]);

  // CALCULATE
  const handleCalculate = async () => {
    const calculation = calculateCarbonFootprint(formData);
    const ecoTip = getEcoTip(formData);

    const finalResult = {
      ...calculation,
      tip: ecoTip,
    };

    setResult(finalResult);

    const username =
      session?.user?.user_metadata?.full_name || "User";

    await supabase.from("footprints").insert([
      {
        username,
        carbon_score: finalResult.score,
      },
    ]);

    setPage("dashboard");
  };

  // LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setPage("home");
  };

  return (
    <Layout setPage={setPage} page={page}>

      {/* NOT LOGIN */}
      {!session && (
        <div className="min-h-screen flex items-center justify-center px-4">

          <div className="bg-white shadow-2xl rounded-[30px] p-6 sm:p-10 text-center max-w-md w-full">

            <div className="text-5xl mb-6">🌿</div>

            <h1 className="text-3xl sm:text-4xl font-black mb-3">
              EcoTracker
            </h1>

            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Track jejak karbonmu dan bantu bumi 🌍
            </p>

            <button
              onClick={async () => {
                await supabase.auth.signInWithOAuth({
                  provider: "google",
                });
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
            >
              Login dengan Google
            </button>

          </div>
        </div>
      )}

      {/* HOME */}
      {session && page === "home" && (
        <div className="min-h-screen flex items-center justify-center px-4">

          <div className="bg-gradient-to-br from-green-50 to-green-100 w-full max-w-6xl rounded-[30px] p-6 sm:p-10 lg:p-16">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div className="text-center lg:text-left">

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4">
                  Halo{" "}
                  <span className="text-green-600 break-words">
                    {session?.user?.user_metadata?.full_name}
                  </span>
                </h1>

                <p className="text-gray-600 mb-6 text-sm sm:text-lg">
                  Mulai tracking aktivitas harianmu 🌍
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

                  <button
                    onClick={() => setPage("tracker")}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold"
                  >
                    Mulai Tracker
                  </button>

                  <button
                    onClick={handleLogout}
                    className="bg-white text-red-500 px-6 py-3 rounded-xl font-bold"
                  >
                    Logout
                  </button>

                </div>

              </div>

              {/* RIGHT */}
              <div className="flex justify-center">

                <div className="bg-white rounded-2xl p-6 shadow-xl text-center w-full max-w-sm">

                  <img
                    src={session?.user?.user_metadata?.avatar_url}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500"
                  />

                  <h2 className="font-bold text-lg">
                    {session?.user?.user_metadata?.full_name}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    Eco Warrior 🌱
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* TRACKER */}
      {session && page === "tracker" && (
        <TrackerForm
          formData={formData}
          setFormData={setFormData}
          calculateFootprint={handleCalculate}
        />
      )}

      {/* DASHBOARD */}
      {session && page === "dashboard" && (
        <div className="space-y-8">
          <Dashboard result={result} />

          <div className="flex justify-center">
            <button
              onClick={() => setPage("leaderboard")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Lihat Leaderboard
            </button>
          </div>
        </div>
      )}

      {/* LEADERBOARD */}
      {session && page === "leaderboard" && (
        <Leaderboard />
      )}

    </Layout>
  );
}

export default App;