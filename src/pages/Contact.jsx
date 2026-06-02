import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="relative">
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm uppercase tracking-[0.35em] text-red-300">
              Contact Tower
            </span>
            <h2 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl neon-red">
              Contact With Me
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              Use the links below to reach me directly.
            </p>
          </div>

          <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="rounded-[40px] border border-white/10 bg-black/70 p-10 shadow-[0_0_80px_rgba(255,0,0,0.12)] backdrop-blur-xl">
              <div className="mb-8 mx-auto flex h-64 w-64 flex-col items-center justify-center rounded-full border border-red-500/20 bg-red-500/5 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-red-300">Get in touch</p>
              </div>
              <div className="space-y-6 text-gray-300">
                <div className="rounded-3xl bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-300">Email</p>
                  <p className="mt-2 text-xl font-semibold text-white">vishallodhi1201@gmail.com</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-300">WhatsApp</p>
                  <p className="mt-2 text-xl font-semibold text-white">+91 88272 08858</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-red-300">Follow</p>
                  <p className="mt-2 text-xl font-semibold text-white">Instagram, GitHub, LinkedIn</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-[calc(100%+3rem)] rounded-[50px] bg-gradient-to-br from-red-500/10 via-black/0 to-white/5 blur-3xl" />
              <div className="relative space-y-6">
                <a
                  href="mailto:vishallodhi1201@gmail.com"
                  className="block transform rounded-[36px] border border-white/10 bg-[#111111] p-10 shadow-[0_32px_100px_rgba(255,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-red-500/70"
                >
                  <div className="flex items-center gap-6">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-red-500/10 text-red-300 ring-1 ring-red-500/20">
                      <FaEnvelope className="text-3xl" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-red-300">Email</p>
                      <h3 className="mt-2 text-3xl font-semibold text-white neon-red">vishallodhi1201@gmail.com</h3>
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/918827208858"
                  target="_blank"
                  rel="noreferrer"
                  className="block transform rounded-[36px] border border-white/10 bg-[#111111] p-10 shadow-[0_32px_100px_rgba(255,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-green-400/70 md:ml-8"
                >
                  <div className="flex items-center gap-6">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-green-500/10 text-green-300 ring-1 ring-green-500/20">
                      <FaWhatsapp className="text-3xl" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-green-300">WhatsApp</p>
                      <h3 className="mt-2 text-3xl font-semibold text-white neon-red">+91 88272 08858</h3>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/vishal-lodhi-081856368/"
                  target="_blank"
                  rel="noreferrer"
                  className="block transform rounded-[36px] border border-white/10 bg-[#111111] p-10 shadow-[0_32px_100px_rgba(255,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-blue-400/70 md:ml-16"
                >
                  <div className="flex items-center gap-6">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20">
                      <FaLinkedin className="text-3xl" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-blue-300">LinkedIn</p>
                      <h3 className="mt-2 text-3xl font-semibold text-white neon-red">vishal-lodhi-081856368</h3>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/vis_1306_?igsh=aGkxdnlkM3Rldmk5"
                  target="_blank"
                  rel="noreferrer"
                  className="block transform rounded-[36px] border border-white/10 bg-[#111111] p-10 shadow-[0_32px_100px_rgba(255,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:border-pink-400/70 md:ml-8"
                >
                  <div className="flex items-center gap-6">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-pink-500/10 text-pink-300 ring-1 ring-pink-500/20">
                      <FaInstagram className="text-3xl" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-pink-300">Instagram</p>
                      <h3 className="mt-2 text-3xl font-semibold text-white neon-red">@vis_1306_</h3>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/vishallodhi1201-cell"
                  target="_blank"
                  rel="noreferrer"
                  className="block transform rounded-[36px] border border-white/10 bg-[#111111] p-10 shadow-[0_32px_100px_rgba(255,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:border-gray-400/70"
                >
                  <div className="flex items-center gap-6">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-white/80 ring-1 ring-white/15">
                      <FaGithub className="text-3xl" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-gray-300">GitHub</p>
                      <h3 className="mt-2 text-3xl font-semibold text-white neon-red">vishallodhi1201-cell</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
