// src/components/Dashboard/Dashboard.jsx

import { Leaf } from "lucide-react";

import MetricCard from "./MetricCard";
import CarbonGauge from "./CarbonGauge";

import { getBadge } from "../../utils/badges";

export default function Dashboard({
  result,
}) {

  // BADGE
  const badge =
    getBadge(result.score);

  return (

    <div className="grid lg:grid-cols-2 gap-10">

      {/* LEFT */}
      <CarbonGauge
        totalEmission={result.totalEmission}
        status={result.status}
      />

      {/* RIGHT */}
      <div className="space-y-6">

        {/* CO2 */}
        <MetricCard
          title="Total CO2 Mereduksi"
          value={`${result.reducedCO2} Kg`}
        />

        {/* SCORE */}
        <MetricCard
          title="Skor Energi Kamu"
          value={result.score}
        />

        {/* BADGE */}
        <div className="bg-white rounded-[32px] shadow-xl p-8 text-center">

          <h2
            className={`text-4xl font-black mb-4 ${badge.color}`}
          >
            {badge.title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {badge.quote}
          </p>

        </div>

        {/* ECO TIPS */}
        <div className="bg-white rounded-[32px] shadow-xl p-8">

          <div className="flex items-center gap-3 mb-5">

            <Leaf className="text-green-600" />

            <h3 className="text-2xl font-black">
              Daily Eco Tips
            </h3>

          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            {result.tip}
          </p>

        </div>

      </div>

    </div>

  );
}