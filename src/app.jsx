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

  const [formData, setFormData] =
    useState(
      getTrackerData() ||
      DEFAULT_FORM_DATA
    );

  const [result, setResult] =
    useState({
      totalEmission: 0,
      reducedCO2: 0,
      score: 0,
      status: "",
      tip: "",
    });

  // AUTH
  useEffect(() => {

    supabase.auth.getSession()
      .then(({ data }) => {
        setSession(data.session);
      });

    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(
        (
          event,
          session
        ) => {
          setSession(session);
        }
      );

    return () => {
      listener.subscription.unsubscribe();
    };

  }, []);

  // SAVE LOCAL
  useEffect(() => {
    saveTrackerData(formData);
  }, [formData]);

  // CALCULATE
  const handleCalculate =
    async () => {

      const calculation =
        calculateCarbonFootprint(
          formData
        );

      const ecoTip =
        getEcoTip(formData);

      const finalResult = {
        ...calculation,
        tip: ecoTip,
      };

      setResult(finalResult);

      const username =
        session?.user?.user_metadata
          ?.full_name || "User";

      await supabase
        .from("footprints")
        .insert([
          {
            username,
            carbon_score:
              finalResult.score,
          },
        ]);

      setPage("dashboard");
    };

  // LOGOUT
  const handleLogout =
    async () => {

      await supabase.auth.signOut();

      setSession(null);
    };

  return (

    <Layout setPage={setPage}>

      {/* BELUM LOGIN */}
      {!session && (

        <div className="min-h-[80vh] flex items-center justify-center">

          <div className="bg-white shadow-2xl rounded-[40px] p-14 text-center max-w-xl w-full">

            <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center text-6xl mx-auto mb-8">
              🌿
            </div>

            <h1 className="text-6xl font-black text-gray-900 mb-4">
              EcoTracker
            </h1>

            <p className="text-gray-500 text-xl mb-10 leading-relaxed">
              Track aktivitas harianmu,
              hitung emisi karbon,
              dan bantu bumi jadi lebih hijau 🌍
            </p>

            <button
              onClick={async () => {

                await supabase.auth.signInWithOAuth({
                  provider: "google",
                });

              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl text-2xl font-bold"
            >
              Login dengan Google
            </button>

          </div>

        </div>

      )}

      {/* HOME */}
      {session && page === "home" && (

        <div className="min-h-[80vh] bg-gradient-to-br from-green-50 to-green-100 rounded-[40px] p-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-3 bg-white shadow-lg px-6 py-4 rounded-full mb-10">
                🌿 Welcome Back
              </div>

              <h1 className="text-7xl font-black text-gray-900 leading-tight mb-6">
                Halo <br />

                <span className="text-green-600">
                  {
                    session?.user?.user_metadata?.full_name
                  }
                </span>
              </h1>

              <p className="text-2xl text-gray-600 mb-12">
                Saatnya cek aktivitas harianmu
                dan bantu bumi jadi lebih hijau 🌍
              </p>

              <div className="flex gap-6">

                <button
                  onClick={() =>
                    setPage("tracker")
                  }
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-3xl text-2xl font-bold"
                >
                  Mulai Tracker
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-white text-red-500 px-10 py-5 rounded-3xl text-2xl font-bold"
                >
                  Logout
                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex justify-center">

              <div className="bg-white rounded-[50px] p-12 shadow-2xl w-full max-w-md text-center">

                <img
                  src={
                    session?.user?.user_metadata?.avatar_url
                  }
                  alt="profile"
                  className="w-40 h-40 rounded-full border-8 border-green-500 mx-auto mb-6"
                />

                <h2 className="text-4xl font-black text-gray-900 mb-2">
                  {
                    session?.user?.user_metadata?.full_name
                  }
                </h2>

                <p className="text-gray-500 text-xl mb-10">
                  Eco Warrior 🌱
                </p>

                <div className="bg-green-500 text-white rounded-[35px] p-8">

                  <h3 className="text-3xl font-black mb-4">
                    🌍 Save Earth
                  </h3>

                  <p className="text-xl leading-relaxed">
                    Mari bersama membuat bumi
                    lebih hijau untuk masa depan.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* TRACKER */}
      {session &&
        page === "tracker" && (

          <TrackerForm
            formData={formData}
            setFormData={setFormData}
            calculateFootprint={
              handleCalculate
            }
          />

        )}

      {/* DASHBOARD */}
      {session &&
        page === "dashboard" && (

          <div className="space-y-10">

            <Dashboard result={result} />

            <div className="flex justify-center">

              <button
                onClick={() =>
                  setPage("leaderboard")
                }
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold"
              >
                Lihat Leaderboard
              </button>

            </div>

          </div>

        )}

      {/* LEADERBOARD */}
      {session &&
        page === "leaderboard" && (
          <Leaderboard />
        )}

    </Layout>

  );
}

export default App;