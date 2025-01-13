export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="text-center">
        <span className="text-5xl md:text-9xl animate-bounce block mb-4">
          🏪
        </span>
        <h2 className="text-2xl md:text-4xl font-semibold animate-pulse">
          Loading...
        </h2>
      </div>
    </main>
  );
}
