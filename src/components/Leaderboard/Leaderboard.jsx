import {
  useEffect,
  useState,
} from "react";

import { supabase } from "../../services/supabase";

export default function Leaderboard() {

  const [users, setUsers] =
    useState([]);

  // GET DATA
  const fetchLeaderboard =
    async () => {

      const { data, error } =
        await supabase
          .from("footprints")
          .select("*")
          .order(
            "carbon_score",
            {
              ascending: false,
            }
          );

      if (!error) {
        setUsers(data);
      }
    };

  useEffect(() => {

    // FIRST LOAD
    fetchLeaderboard();

    // REALTIME
    const channel =
      supabase
        .channel(
          "leaderboard-live"
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "footprints",
          },
          () => {

            fetchLeaderboard();

          }
        )
        .subscribe();

    return () => {
      supabase.removeChannel(
        channel
      );
    };

  }, []);

  return (

    <div className="max-w-5xl mx-auto">

      <div className="text-center mb-12">

        <h1 className="text-6xl font-black text-gray-900 mb-4">
          🏆 Leaderboard
        </h1>

        <p className="text-xl text-gray-500">
          Realtime Eco Ranking
        </p>

      </div>

      <div className="space-y-5">

        {users.map(
          (
            user,
            index
          ) => (

            <div
              key={user.id}
              className="bg-white rounded-3xl shadow-lg p-6 flex items-center justify-between"
            >

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl font-black text-green-700">
                  #{index + 1}
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    {
                      user.username
                    }
                  </h2>

                  <p className="text-gray-500">
                    Eco User 🌿
                  </p>

                </div>

              </div>

              <div className="text-right">

                <h2 className="text-4xl font-black text-green-600">
                  {
                    user.carbon_score
                  }
                </h2>

                <p className="text-gray-500">
                  Eco Score
                </p>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
}