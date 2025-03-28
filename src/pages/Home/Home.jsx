import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Moon } from "../../models/Moon";
import Experience from "./Experience";
import { Astronaut } from "../../models/Astronaut";
import { AstronautTransformed } from "../../models/Astronaut-transformed";

export const Home = () => {
  return (
    <section className="main">
      <Canvas camera={{ position: [0, 0, 20], fov: 30 }}>
        <color attach="background" args={["black"]} />
        <pointLight intensity={200} position={[0, 0, 10]} />
        <pointLight intensity={200} position={[6, 0, 10]} />
        <Experience />
        <Stars />
        <Moon />
        <Float
          speed={1}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0, 1]}
        >
          <Astronaut />
        </Float>
        <Float
          speed={1}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[4, 10]}
        >
          <AstronautTransformed />
        </Float>
      </Canvas>
    </section>
  );
};
