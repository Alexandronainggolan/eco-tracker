// src/components/Tracker/InputCard.jsx

export default function InputCard({
  icon,
  title,
  value,
  onChange,
  label,
}) {

  // CEK APAKAH INPUT JAM
  const isHourInput =
    label
      ?.toLowerCase()
      .includes("jam");

  return (

    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 hover:-translate-y-1 transition">

      <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 mb-5">
        {icon}
      </div>

      <h3 className="font-bold text-xl text-gray-800">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-1 mb-5">
        {label}
      </p>

      <input
        type="range"
        min="0"

        // JIKA INPUT JAM → MAX 24
        // SELAIN ITU → MAX 1000
        max={
          isHourInput
            ? 24
            : 1000
        }

        value={value}
        onChange={onChange}
        className="w-full accent-green-600"
      />

      <div className="mt-4 text-4xl font-black text-green-700">
        {value}
      </div>

    </div>
  );
}