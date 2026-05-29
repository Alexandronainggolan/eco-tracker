import { supabase } from "../../services/supabase";

export default function LandingPage() {

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-green-50 to-white">

      {/* TITLE */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-green-700 mb-4">
        EcoTracker
      </h1>

      {/* SUBTITLE */}
      <p className="text-gray-600 text-sm sm:text-lg lg:text-xl mb-8 max-w-md sm:max-w-xl">
        Pantau jejak karbonmu dan bantu bumi jadi lebih hijau 🌍
      </p>

      {/* BUTTON */}
      <button
        onClick={handleGoogleLogin}
        className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-2xl text-base sm:text-xl font-semibold transition shadow-lg active:scale-95"
      >
        Login dengan Google
      </button>

    </div>
  );
}