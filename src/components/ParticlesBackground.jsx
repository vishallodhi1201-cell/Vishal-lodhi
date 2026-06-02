import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#000000",
        },
        particles: {
          number: {
            value: 120,
          },
          color: {
            value: "#ff0000",
          },
          links: {
            enable: true,
            color: "#ff0000",
            distance: 150,
            opacity: 0.2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
      }}
    />
  );
}
