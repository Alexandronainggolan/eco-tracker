// src/components/Landing/MissionCard.jsx

export default function MissionCard({
  icon,
  title,
  desc,
}) {
  return (
    <div className="bg-gray-50 hover:bg-green-50 transition-all duration-300 rounded-3xl p-5 border border-gray-100">
      <div className="w-14 h-14 rounded-2xl bg-white shadow flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="font-bold text-lg text-gray-800">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {desc}
      </p>
    </div>
  );
}