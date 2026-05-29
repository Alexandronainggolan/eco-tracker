// src/components/Dashboard/CarbonGauge.jsx

export default function CarbonGauge({
  totalEmission,
  status,
}) {
  const percent = Math.min(
    100,
    Math.max(0, 100 - totalEmission * 2)
  );

  return (
    <div className="bg-white rounded-[32px] shadow-2xl p-10 flex flex-col items-center justify-center">
      <div className="relative w-72 h-72">
        <svg className="w-72 h-72 rotate-[-90deg]">
          <circle
            cx="144"
            cy="144"
            r="120"
            stroke="#E5E7EB"
            strokeWidth="20"
            fill="transparent"
          />

          <circle
            cx="144"
            cy="144"
            r="120"
            stroke={
              totalEmission > 25
                ? "#F97316"
                : "#16A34A"
            }
            strokeWidth="20"
            fill="transparent"
            strokeDasharray={754}
            strokeDashoffset={
              754 - (754 * percent) / 100
            }
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-6xl font-black">
            {totalEmission}
          </div>

          <div className="text-gray-500">
            Kg CO2
          </div>
        </div>
      </div>

      <div
        className={`mt-8 text-2xl font-black ${
          totalEmission > 25
            ? "text-orange-500"
            : "text-green-600"
        }`}
      >
        {status}
      </div>
    </div>
  );
}