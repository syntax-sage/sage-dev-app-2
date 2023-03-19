"use client";
import { useCallback } from "react";
import { Container, Engine, StartValueType } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Random } from "tsparticles-engine/types/Options/Classes/Random";
import React from "react";
import Earth from "./earth";
import Link from "next/link";

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
    <>
      <Particles
        id="tsparticles2"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
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
                color: "#FF0000",
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
              enable: false,
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
              value: 100,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: ["circle", "square"],
            },
            size: {
              random: true,
              value: { min: 0.1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      <Earth></Earth>
      <span className="ml-5 mt-5 opacity-25 fixed z-30 bg-transparent t-20">
        &quot;Earth&quot; on
        <Link href={"https://skfb.ly/6TwGG"}>SketchFab</Link>
        by Akshat is licensed under
        <Link href={"http://creativecommons.org/licenses/by/4.0/"}>
          Creative Commons Attribution
        </Link>
      </span>{" "}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          emitters: {
            direction: "outside",
            size: {
              height: 70,
              width: 70,
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
            move: {
              direction: "outside",
              enable: true,
              outModes: {
                default: "destroy",
              },

              random: true,
              speed: { min: 3, max: 10 },
              straight: true,
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
                speed: 10,
                count: 1,
                enable: true,
                startValue: "min",
                destroy: "max",
              },
              random: false,
              value: { min: 1, max: 50 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default particles;
