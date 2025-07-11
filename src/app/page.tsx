import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Spline 3D Scene - Full Screen */}
      <Spline
        scene="https://prod.spline.design/F6BcbYJkSdRDdQTg/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />

      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-80">
        <div className="mb-8 px-6 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 shadow-2xl">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-1">
              yeshuani.com
            </h1>
            <p className="text-white/70 dark:text-gray-300 text-sm md:text-base font-light">
              Coming Soon
            </p>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
