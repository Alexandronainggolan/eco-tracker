// src/components/Dashboard/MetricCard.jsx

export default function MetricCard({
  title,
  value,
}) {
  return (
    <div className="bg-white rounded-[32px] shadow-xl p-8">
      <div className="text-gray-500">
        {title}
      </div>

      <div className="text-5xl font-black mt-3 text-green-700">
        {value}
      </div>
    </div>
  );
}