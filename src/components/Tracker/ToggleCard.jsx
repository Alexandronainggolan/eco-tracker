// src/components/Tracker/ToggleCard.jsx

export default function ToggleCard({
  icon,
  title,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-3xl p-6 shadow-lg border transition-all duration-300 text-left ${
        active
          ? "bg-green-600 text-white border-green-600"
          : "bg-white border-gray-100 hover:border-green-400"
      }`}
    >
      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
        {icon}
      </div>

      <h3 className="font-bold text-xl">
        {title}
      </h3>

      <div
        className={`mt-5 w-14 h-8 rounded-full relative ${
          active ? "bg-white" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-1 w-6 h-6 rounded-full bg-green-600 transition-all ${
            active ? "left-7" : "left-1"
          }`}
        />
      </div>
    </button>
  );
}