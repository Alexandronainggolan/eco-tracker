export const getBadge = (score) => {

  if (score >= 100) {
    return {
      title: "Eco Legend 👑",
      color: "text-yellow-500",
      quote: "Kamu legenda penyelamat bumi 🌍",
    };
  }

  if (score >= 90) {
    return {
      title: "Earth Saver 🌍",
      color: "text-green-600",
      quote: "Bumi jadi lebih hijau karenamu 🌱",
    };
  }

  if (score >= 70) {
    return {
      title: "Green Warrior 🌿",
      color: "text-emerald-500",
      quote: "Langkah kecilmu berdampak besar 💚",
    };
  }

  return {
    title: "Eco Beginner 🌱",
    color: "text-gray-500",
    quote: "Mulai perjalanan menjaga bumi 🚀",
  };
};