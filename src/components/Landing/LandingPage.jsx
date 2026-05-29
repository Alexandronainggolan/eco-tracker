import { supabase } from "../../services/supabase";

export default function LandingPage({
  onLogin,
}) {

  const handleGoogleLogin =
    async () => {

      const { error } =
        await supabase.auth.signInWithOAuth(
          {
            provider:
              "google",
          }
        );

      if (error) {
        console.log(error);
      }
    };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">

      <h1 className="text-6xl font-bold mb-6">
        EcoTracker
      </h1>

      <p className="text-gray-600 text-xl mb-10 max-w-2xl">
        Pantau jejak karbonmu
        dan bantu bumi jadi
        lebih hijau 🌍
      </p>

      <button
        onClick={
          handleGoogleLogin
        }
        className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl text-xl font-semibold"
      >
        Login dengan Google
      </button>
    </div>
  );
}