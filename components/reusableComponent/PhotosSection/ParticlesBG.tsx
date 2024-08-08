import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, Container } from "tsparticles-engine";
import style from "./styles.module.scss";

interface ParticleContainerProps {
  id: string;
}

const ParticleContainer: React.FC<ParticleContainerProps> = ({ id }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    [],
  );

  const particlesOptions = {
    autoPlay: true,
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    detectRetina: true,
    fpsLimit: 120,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 600,
        },
      },
      color: {
        value: "#ff0000",
      },
      shape: {
        type: "character",
        character: {
          value: ["🩷", "🫶🏻", "💖", "❤️‍🔥"],
          font: "Arial",
          style: "",
          weight: 400,
          fill: true,
        },
      },
      opacity: {
        value: { min: 0.3, max: 1 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: 20,
        random: true,
        animation: {
          enable: true,
          speed: 5,
          minimumValue: 20,
          sync: false,
        },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      twinkle: {
        particles: {
          enable: false,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas" as const,
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    background: {
      color: {
        value: "transparent",
      },
    },
  };

  return (
    <Particles
      className={style.particlesBackground}
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticleContainer;
