// src/services/carbonCalculator.js

export const calculateCarbonFootprint = (
  formData
) => {
  const carEmission =
    formData.vehicleKm * 0.21;

  const motorcycleEmission =
    formData.motorcycleKm * 0.1;

  const lampEmission =
    formData.lampHours * 0.08;

  const acEmission =
    formData.acHours * 0.87;

    const phoneEmission =
  formData.phoneChargeHours * 0.02;

const laptopEmission =
  formData.laptopChargeHours * 0.05;

const tvEmission =
  formData.tvHours * 0.09;

const washingEmission =
  formData.washingMachineHours * 0.5;

const fridgeEmission =
  formData.fridgeHours * 0.15;

  let reduction = 0;

  if (formData.publicTransport) {
    reduction += 5;
  }

  if (formData.unplugged) {
    reduction += 2;
  }

  if (formData.sortWaste) {
    reduction += 3;
  }

  if (formData.tumbler) {
    reduction += 3;
  }

  const totalEmission =
  carEmission +
  motorcycleEmission +
  lampEmission +
  acEmission +
  phoneEmission +
  laptopEmission +
  tvEmission +
  washingEmission +
  fridgeEmission -
  reduction;

  const score = Math.max(
    0,
    Math.round(100 - totalEmission)
  );

  return {
    totalEmission:
      totalEmission < 0
        ? 0
        : totalEmission.toFixed(1),

    reducedCO2: reduction,

    score,

    status:
      totalEmission > 25
        ? "Boros Energi ⚠️"
        : "Sahabat Bumi 🌿",
  };
};