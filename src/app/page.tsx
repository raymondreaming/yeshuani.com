import Spline from "@splinetool/react-spline";
import Image from "next/image";

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="flex items-center justify-between backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-xl border border-white/20 dark:border-white/10 shadow-lg px-6 py-3">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src="/yeshuani-logo.png"
              alt="Yeshuani Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white">Yeshuani</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Reality Recode
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Written Works
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Policies
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Person Icon */}
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Cart Icon */}
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l5.7-5.7m0 0L17 13"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Spline 3D Scene - Full Screen */}
      <Spline
        scene="https://prod.spline.design/F6BcbYJkSdRDdQTg/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
