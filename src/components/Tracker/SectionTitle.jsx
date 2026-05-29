// src/components/Tracker/SectionTitle.jsx

export default function SectionTitle({
  icon,
  title,
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="bg-green-100 p-3 rounded-2xl text-green-700">
        {icon}
      </div>

      <h2 className="text-2xl font-black text-gray-800">
        {title}
      </h2>
    </div>
  );
}