import Navbar from "./Navbar";

export default function Layout({ children, setPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col">

      {/* NAVBAR */}
      <Navbar setPage={setPage} />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-4 sm:px-6 lg:px-10 py-6 sm:py-8 max-w-7xl w-full mx-auto">
        {children}
      </main>

    </div>
  );
}