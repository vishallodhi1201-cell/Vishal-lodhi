export default function About() {
  return (
    <div className="about-section min-h-screen text-white p-6 flex items-start justify-start pt-12">
      <img src="/images/about-background-image.png" alt="About background" className="about-bg-image" aria-hidden="true" />

      <div className="starfield left" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="starfield right" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>

      <div className="max-w-4xl text-left relative z-30 ml-6 mt-6 popup-box">
        <div className="about-panel bg-black/30 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(255,0,0,0.12)]">
          <h1 className="about-title about-neon-heading text-5xl sm:text-6xl font-extrabold mb-6">
            About Me
          </h1>
          <p className="about-neon-copy max-w-2xl text-lg leading-8">
            I design dynamic, immersive web experiences with glowing visuals and polished interactions. My work blends modern UI styling with vibrant neon accents, creating polished pages that feel alive.
          </p>

          <div className="mission-box mt-10 p-6 rounded-[28px] border border-fuchsia-300/40 bg-[#0d0216]/80 shadow-[0_0_60px_rgba(194,89,255,0.12)]">
            <h2 className="mission-title text-2xl font-semibold mb-3 text-fuchsia-100">
              Mission
            </h2>
            <p className="mission-copy text-gray-200 leading-7">
              Build bold, futuristic interfaces that stand out. My mission is to create websites with strong visual impact, fast performance, and a memorable neon-powered presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
