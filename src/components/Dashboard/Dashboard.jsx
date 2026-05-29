import { Leaf } from "lucide-react";
import MetricCard from "./MetricCard";
import CarbonGauge from "./CarbonGauge";
import { getBadge } from "../../utils/badges";

export default function Dashboard({ result }) {

  const badge = getBadge(result.score);

  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

      {/* LEFT */}
      <div className="w-full">
        <CarbonGauge
          totalEmission={result.totalEmission}
          status={result.status}
        />
      </div>

      {/* RIGHT */}
      <div className="space-y-5 lg:space-y-6">

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
        <div className="bg-white rounded-2xl lg:rounded-[32px] shadow-xl p-5 sm:p-6 lg:p-8 text-center">

          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-3 lg:mb-4 ${badge.color}`}>
            {badge.title}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            {badge.quote}
          </p>

        </div>

        {/* ECO TIPS */}
        <div className="bg-white rounded-2xl lg:rounded-[32px] shadow-xl p-5 sm:p-6 lg:p-8">

          <div className="flex items-center gap-3 mb-4 lg:mb-5">

            <Leaf className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />

            <h3 className="text-xl sm:text-2xl font-black">
              Daily Eco Tips
            </h3>

          </div>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            {result.tip}
          </p>

        </div>

      </div>

    </div>
  );
}