// src/components/Leaderboard/BadgeCard.jsx

import { Trophy } from "lucide-react";

export default function BadgeCard({
  title,
  unlocked,
}) {
  return (
    <div
      className={`rounded-3xl p-6 shadow-xl border text-center ${
        unlocked
          ? "bg-green-600 text-white"
          : "bg-white text-gray-400"
      }`}
    >
      <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-5">
        <Trophy size={40} />
      </div>

      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="mt-2 text-sm">
        {unlocked
          ? "Badge berhasil dibuka"
          : "Belum terbuka"}
      </p>
    </div>
  );
}