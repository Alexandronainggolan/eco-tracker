// src/components/Common/Layout.jsx

import Navbar from "./Navbar";

export default function Layout({
  children,
  setPage,
}) {

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">

      <Navbar setPage={setPage} />

      <main className="px-6 py-8">
        {children}
      </main>

    </div>

  );
}