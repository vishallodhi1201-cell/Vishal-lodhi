export default function About() {
  const aboutBg = `${import.meta.env.BASE_URL}images/about-background-image.png`;

  return (
    <section className="about-section min-h-screen overflow-hidden px-0 py-0">
      <img src={aboutBg} alt="About background" className="about-bg-image w-full h-full object-cover" aria-hidden="true" />
    </section>
  );
}
