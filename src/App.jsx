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
    <Layout setPage={setPage}>

      {/* NOT LOGIN */}
      {!session && (
        <div className="min-h-[70vh] flex items-center justify-center px-4">

          <div className="bg-white shadow-2xl rounded-[40px] p-8 sm:p-12 text-center max-w-xl w-full">

            <div className="text-5xl mb-6">🌿</div>

            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              EcoTracker
            </h1>

            <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed">
              Track aktivitas harianmu, hitung emisi karbon,
              dan bantu bumi jadi lebih hijau 🌍
            </p>

            <button
              onClick={async () => {
                await supabase.auth.signInWithOAuth({
                  provider: "google",
                });
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold"
            >
              Login dengan Google
            </button>

          </div>
        </div>
      )}

      {/* HOME (FIXED) */}
      {session && page === "home" && (
        <div className="min-h-[70vh] flex items-center justify-center px-4">

          <div className="bg-gradient-to-br from-green-50 to-green-100 w-full rounded-[40px] p-8 sm:p-12 lg:p-16">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div>

                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 text-sm">
                  🌿 Welcome Back
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
                  Halo{" "}
                  <span className="text-green-600">
                    {session?.user?.user_metadata?.full_name}
                  </span>
                </h1>

                <p className="text-gray-600 text-base sm:text-lg mb-8">
                  Saatnya cek aktivitas harianmu dan bantu bumi jadi lebih hijau 🌍
                </p>

                <div className="flex flex-col sm:flex-row gap-4">

                  <button
                    onClick={() => setPage("tracker")}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold"
                  >
                    Mulai Tracker
                  </button>

                  <button
                    onClick={handleLogout}
                    className="bg-white text-red-500 px-6 py-3 rounded-2xl font-bold"
                  >
                    Logout
                  </button>

                </div>

              </div>

              {/* RIGHT */}
              <div className="flex justify-center">

                <div className="bg-white rounded-[40px] p-8 shadow-xl text-center w-full max-w-sm">

                  <img
                    src={session?.user?.user_metadata?.avatar_url}
                    className="w-28 h-28 rounded-full mx-auto border-4 border-green-500 mb-4"
                  />

                  <h2 className="text-2xl font-bold">
                    {session?.user?.user_metadata?.full_name}
                  </h2>

                  <p className="text-gray-500 mb-6">Eco Warrior 🌱</p>

                  <div className="bg-green-500 text-white p-6 rounded-2xl">
                    <p className="font-bold">Save Earth 🌍</p>
                    <p className="text-sm mt-2">
                      Mulai dari langkah kecil setiap hari.
                    </p>
                  </div>

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
        <div className="space-y-10">
          <Dashboard result={result} />

          <div className="flex justify-center">
            <button
              onClick={() => setPage("leaderboard")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold"
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