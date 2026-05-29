// src/utils/ecoTips.js

export const getEcoTip = (
  formData
) => {
  const carEmission =
    formData.vehicleKm * 0.2;

  const motorcycleEmission =
    formData.motorcycleKm * 0.1;

  const lampEmission =
    formData.lampHours * 0.05;

  const acEmission =
    formData.acHours * 0.87;

  const phoneEmission =
    formData.phoneChargeHours * 0.02;

  const laptopEmission =
    formData.laptopChargeHours * 0.05;

  const tvEmission =
    formData.tvHours * 0.09;

  const washingEmission =
    formData.washingMachineHours *
    0.5;

  const fridgeEmission =
    formData.fridgeHours * 0.15;

  const maxEmission = Math.max(
    carEmission,
    motorcycleEmission,
    lampEmission,
    acEmission,
    phoneEmission,
    laptopEmission,
    tvEmission,
    washingEmission,
    fridgeEmission
  );

  if (maxEmission === acEmission) {
    return "Atur suhu AC ideal di 24°C untuk menghemat energi.";
  }

  if (
    maxEmission ===
    motorcycleEmission
  ) {
    return "Gunakan transportasi umum atau berbagi kendaraan untuk mengurangi emisi.";
  }

  if (
    maxEmission === lampEmission
  ) {
    return "Matikan lampu saat tidak digunakan untuk menghemat listrik.";
  }

  if (maxEmission === tvEmission) {
    return "Kurangi waktu menonton TV untuk menghemat konsumsi listrik.";
  }

  if (
    maxEmission === washingEmission
  ) {
    return "Gunakan mesin cuci saat muatan penuh agar lebih hemat energi.";
  }

  if (
    maxEmission === fridgeEmission
  ) {
    return "Atur suhu kulkas secara optimal agar konsumsi listrik lebih efisien.";
  }

  if (
    maxEmission === laptopEmission
  ) {
    return "Aktifkan mode hemat daya pada laptop untuk mengurangi konsumsi energi.";
  }

  if (
    maxEmission === phoneEmission
  ) {
    return "Cabut charger HP setelah baterai penuh untuk menghemat listrik.";
  }

  return "Pertahankan gaya hidup ramah lingkunganmu 🌿";
};