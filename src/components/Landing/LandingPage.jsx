import { supabase } from "../../services/supabase";

export default function LandingPage({ onLogin }) {

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        EcoTracker
      </h1>

      <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-10 max-w-xl lg:max-w-2xl">
        Pantau jejak karbonmu dan bantu bumi jadi lebih hijau 🌍
      </p>

      <button
        onClick={handleGoogleLogin}
        className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-semibold transition"
      >
        Login dengan Google
      </button>

    </div>
  );
}