"use client";
import { useCallback } from "react";
import { Container, Engine, StartValueType } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Random } from "tsparticles-engine/types/Options/Classes/Random";
import React from "react";
import HeroBG from "../../public/HERO_BG.png";

type Props = {};

const particles = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        emitters: {
          direction: "outside",
          size: {
            height: 25,
            width: 25,
          },
          position: {
            x: 50,
            y: 50,
          },
          rate: {
            delay: 0.1,
            quantity: 3,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              parallax: { enable: true, force: 20, smooth: 50 },
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          twinkle: {
            particles: {
              enable: true,
              color: "#FFD500",
              frequency: 0.03,
              opacity: 1,
            },
          },
          color: {
            value: "#D9D9D9",
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "outside",
            enable: true,
            outModes: {
              default: "destroy",
            },

            random: true,
            speed: { min: 3, max: 10 },
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            animation: {
              speed: 2,
              count: 0.5,
              enable: true,
              startValue: "min",
              destroy: "max",
            },
            random: false,
            value: { min: 1, max: 50 },
          },
        },
        detectRetina: true,
        background: {
          image: `${HeroBG}`,
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default particles;
