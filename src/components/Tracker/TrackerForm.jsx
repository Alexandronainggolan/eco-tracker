import {
  Car,
  Bike,
  Users,
  Lightbulb,
  Snowflake,
  Plug,
  Trash2,
  ShoppingBag,
  Smartphone,
  Laptop,
  Tv,
  WashingMachine,
  Refrigerator,
} from "lucide-react";

import SectionTitle from "./SectionTitle";
import InputCard from "./InputCard";
import ToggleCard from "./ToggleCard";

export default function TrackerForm({
  formData,
  setFormData,
  calculateFootprint,
}) {
  const update = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="px-4 sm:px-6">

      {/* TRANSPORT */}
      <SectionTitle icon={<Car />} title="Transportasi" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">

        <InputCard
          icon={<Car size={28} />}
          title="Mobil"
          value={formData.vehicleKm}
          onChange={(e) => update("vehicleKm", Number(e.target.value))}
          label="KM berkendara"
        />

        <InputCard
          icon={<Bike size={28} />}
          title="Motor"
          value={formData.motorcycleKm}
          onChange={(e) => update("motorcycleKm", Number(e.target.value))}
          label="KM berkendara"
        />

        <ToggleCard
          icon={<Users size={28} />}
          title="Transportasi Umum"
          active={formData.publicTransport}
          onClick={() => update("publicTransport", !formData.publicTransport)}
        />

      </div>

      {/* ENERGY */}
      <SectionTitle icon={<Lightbulb />} title="Penggunaan Energi" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">

        <InputCard
          icon={<Lightbulb size={28} />}
          title="Lampu"
          value={formData.lampHours}
          onChange={(e) => update("lampHours", Number(e.target.value))}
          label="Jam menyala"
        />

        <InputCard
          icon={<Snowflake size={28} />}
          title="AC"
          value={formData.acHours}
          onChange={(e) => update("acHours", Number(e.target.value))}
          label="Jam penggunaan"
        />

        <InputCard
          icon={<Smartphone size={28} />}
          title="Cas HP"
          value={formData.phoneChargeHours}
          onChange={(e) => update("phoneChargeHours", Number(e.target.value))}
          label="Jam penggunaan"
        />

        <InputCard
          icon={<Laptop size={28} />}
          title="Cas Laptop"
          value={formData.laptopChargeHours}
          onChange={(e) => update("laptopChargeHours", Number(e.target.value))}
          label="Jam penggunaan"
        />

        <InputCard
          icon={<Tv size={28} />}
          title="Televisi"
          value={formData.tvHours}
          onChange={(e) => update("tvHours", Number(e.target.value))}
          label="Jam penggunaan"
        />

        <InputCard
          icon={<WashingMachine size={28} />}
          title="Mesin Cuci"
          value={formData.washingMachineHours}
          onChange={(e) => update("washingMachineHours", Number(e.target.value))}
          label="Jam penggunaan"
        />

        <InputCard
          icon={<Refrigerator size={28} />}
          title="Kulkas"
          value={formData.fridgeHours}
          onChange={(e) => update("fridgeHours", Number(e.target.value))}
          label="Jam penggunaan"
        />

        <ToggleCard
          icon={<Plug size={28} />}
          title="Cabut Colokan"
          active={formData.unplugged}
          onClick={() => update("unplugged", !formData.unplugged)}
        />

      </div>

      {/* WASTE */}
      <SectionTitle icon={<Trash2 />} title="Pengelolaan Sampah" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">

        <ToggleCard
          icon={<Trash2 size={28} />}
          title="Memilah Sampah"
          active={formData.sortWaste}
          onClick={() => update("sortWaste", !formData.sortWaste)}
        />

        <ToggleCard
          icon={<ShoppingBag size={28} />}
          title="Membawa Tumbler"
          active={formData.tumbler}
          onClick={() => update("tumbler", !formData.tumbler)}
        />

      </div>

      {/* BUTTON */}
      <button
        onClick={calculateFootprint}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-green-600 hover:bg-green-700 transition text-white px-5 sm:px-8 py-4 sm:py-5 rounded-full shadow-2xl font-bold text-sm sm:text-base"
      >
        Hitung Jejak Karbonku
      </button>

    </div>
  );
}