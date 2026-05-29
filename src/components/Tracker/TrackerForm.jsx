// src/components/Tracker/TrackerForm.jsx

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
    <div>
      {/* TRANSPORT */}
      <SectionTitle
        icon={<Car />}
        title="Transportasi"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <InputCard
          icon={<Car size={32} />}
          title="Mobil"
          value={formData.vehicleKm}
          onChange={(e) =>
            update("vehicleKm", Number(e.target.value))
          }
          label="KM berkendara"
        />

        <InputCard
          icon={<Bike size={32} />}
          title="Motor"
          value={formData.motorcycleKm}
          onChange={(e) =>
            update(
              "motorcycleKm",
              Number(e.target.value)
            )
          }
          label="KM berkendara"
        />

        <ToggleCard
          icon={<Users size={32} />}
          title="Transportasi Umum"
          active={formData.publicTransport}
          onClick={() =>
            update(
              "publicTransport",
              !formData.publicTransport
            )
          }
        />
      </div>

      {/* ENERGY */}
      <SectionTitle
        icon={<Lightbulb />}
        title="Penggunaan Energi"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Lampu */}
        <InputCard
          icon={<Lightbulb size={32} />}
          title="Lampu"
          value={formData.lampHours}
          onChange={(e) =>
            update(
              "lampHours",
              Number(e.target.value)
            )
          }
          label="Jam menyala"
        />

        {/* AC */}
        <InputCard
          icon={<Snowflake size={32} />}
          title="AC"
          value={formData.acHours}
          onChange={(e) =>
            update(
              "acHours",
              Number(e.target.value)
            )
          }
          label="Jam penggunaan"
        />

        {/* Cas HP */}
        <InputCard
          icon={<Smartphone size={32} />}
          title="Cas HP"
          value={formData.phoneChargeHours}
          onChange={(e) =>
            update(
              "phoneChargeHours",
              Number(e.target.value)
            )
          }
          label="Jam penggunaan"
        />

        {/* Cas Laptop */}
        <InputCard
          icon={<Laptop size={32} />}
          title="Cas Laptop"
          value={formData.laptopChargeHours}
          onChange={(e) =>
            update(
              "laptopChargeHours",
              Number(e.target.value)
            )
          }
          label="Jam penggunaan"
        />

        {/* Televisi */}
        <InputCard
          icon={<Tv size={32} />}
          title="Televisi"
          value={formData.tvHours}
          onChange={(e) =>
            update(
              "tvHours",
              Number(e.target.value)
            )
          }
          label="Jam penggunaan"
        />

        {/* Mesin Cuci */}
        <InputCard
          icon={<WashingMachine size={32} />}
          title="Mesin Cuci"
          value={formData.washingMachineHours}
          onChange={(e) =>
            update(
              "washingMachineHours",
              Number(e.target.value)
            )
          }
          label="Jam penggunaan"
        />

        {/* Kulkas */}
        <InputCard
          icon={<Refrigerator size={32} />}
          title="Kulkas"
          value={formData.fridgeHours}
          onChange={(e) =>
            update(
              "fridgeHours",
              Number(e.target.value)
            )
          }
          label="Jam penggunaan"
        />

        {/* Cabut Colokan */}
        <ToggleCard
          icon={<Plug size={32} />}
          title="Cabut Colokan"
          active={formData.unplugged}
          onClick={() =>
            update(
              "unplugged",
              !formData.unplugged
            )
          }
        />
      </div>

      {/* WASTE */}
      <SectionTitle
        icon={<Trash2 />}
        title="Pengelolaan Sampah"
      />

      <div className="grid md:grid-cols-2 gap-6">
        <ToggleCard
          icon={<Trash2 size={32} />}
          title="Memilah Sampah"
          active={formData.sortWaste}
          onClick={() =>
            update(
              "sortWaste",
              !formData.sortWaste
            )
          }
        />

        <ToggleCard
          icon={<ShoppingBag size={32} />}
          title="Membawa Tumbler"
          active={formData.tumbler}
          onClick={() =>
            update(
              "tumbler",
              !formData.tumbler
            )
          }
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={calculateFootprint}
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 transition text-white px-8 py-5 rounded-full shadow-2xl font-bold"
      >
        Hitung Jejak Karbonku
      </button>
    </div>
  );
}