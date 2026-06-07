export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url('${baseUrl}images/bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-7xl font-bold text-red-600">
          VISHAL
        </h1>

        <p className="mt-4 text-2xl">
          Creative Developer
        </p>

        <button className="mt-8 px-8 py-4 bg-red-600 rounded-xl">
          Explore Portfolio
        </button>
      </div>
    </section>
  );
}
