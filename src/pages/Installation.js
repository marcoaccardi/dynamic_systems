// import { useControls } from 'leva';
import * as THREE from "three";
import { useState, useEffect, useRef } from "react";
import { Canvas, render, events, extend, useFrame } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import { Particles } from "./Particles";
import * as Tone from "tone";
import { Filter, Player, Reverb, Transport } from "tone";
import src from "./audio.mp3";

function Installation() {
  // const props = useControls({
  //   focus: { value: 6.72, min: 3, max: 7, step: 0.01 },
  //   speed: { value: 1.7, min: 0.1, max: 100, step: 0.1 },
  //   aperture: { value: 5.8, min: 1, max: 5.6, step: 0.1 },
  //   fov: { value: 92, min: 0, max: 200 },
  //   curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  // });
  const [focus, setFocus] = useState(6.72);
  const [speed, setSpeed] = useState(5.7);
  const [aperture, setAperture] = useState(5.8);
  const [fov, setFov] = useState(92);
  const [curl, setCurl] = useState(0.55);

  // AUDIO PLAYER
  const [player, setPlayer] = useState(null);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState(null); // default frequency value
  const [freq, setFreq] = useState(5000);
  const canvasRef = useRef(null);

  function createPlayer() {
    const newFilter = new Filter({
      type: "highpass",
      frequency: freq, // initialize filter frequency with default value
      rolloff: -24,
    });

    const newPlayer = new Player(src, () => {
      Transport.bpm.value = newPlayer.bpm;
    });

    newPlayer.loop = true;
    newPlayer.connect(newFilter).toDestination();
    setPlayer(newPlayer);
    setFilter(newFilter);
  }

  function togglePlayer() {
    setCount((prevCount) => prevCount + 1);

    if (count === 0) {
      setTimeout(() => {
        console.log("CREATE PLAYER");
        createPlayer();
        console.log("START");
        if (player) {
          player.start();
        }
      }, 2000);
    }
  }

  function handleMouseMove(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const newFreq = (x / rect.width) * 10000;

    setFreq(newFreq);

    const xCart = event.clientX * 0.0002;
    const yCart = event.clientY * 0.0002;
    const r = Math.sqrt(xCart * xCart + yCart * yCart);
    const theta = Math.atan2(yCart, xCart);

    const rScaled = (r - 0.05) / 0.15;
    const rFinal = rScaled * 0.15 + 0.05;
    const thetaScaled = (1 - theta / Math.PI) * (0.2 - 0.05) + 0.05;

    // let curlAmount = event.clientY * 0.0002;

    console.log(rFinal);
    setCurl(thetaScaled);
  }

  function cartToPol(event) {
    const x = event.clientX;
    const y = event.clientY;

    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x);

    const rScaled = (r - 0.05) / 0.15;
    const rFinal = rScaled * 0.15 + 0.05;

    console.log("r: " + rFinal);
    console.log("theta: " + theta);
    return { r: rScaled, theta: rFinal };
  }

  useEffect(() => {
    if (player && count > 0) {
      console.log("filter-val", filter.frequency.value);
      console.log("freq-val", freq);
      // filter.frequency.value = freq;
      // console.log(this.filter);
      // setFilter(filter.frequency.value);
      // player.connect(filter).toDestination();
    }
  }, [freq, handleMouseMove]);

  useEffect(() => {
    createPlayer();

    return () => {
      // doesn't stop on unmount
      if (player) {
        player.stop();
        player.disconnect();
        console.log(player);
      }
    };
  }, []);

  return (
    <>
      <div className="wrapper" onClick={togglePlayer}>
        <Canvas
          className="canvas"
          linear
          camera={{ fov: 25, position: [0, 0, 6] }}
          // gl={new THREE.WebGLRenderer({ antialias: true, alpha: true })}
          gl={{ antialias: true, alpha: true }}
          onMouseMove={handleMouseMove}
          ref={canvasRef}
        >
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={1.5}
            zoomSpeed={0.2}
          />
          <CameraShake
            yawFrequency={1}
            maxYaw={0.05}
            pitchFrequency={8}
            maxPitch={0.05}
            rollFrequency={0.5}
            maxRoll={0.5}
            intensity={0.1}
          />
          {/* <Particles {...props} /> */}
          <Particles
            focus={focus}
            speed={speed}
            aperture={aperture}
            fov={fov}
            curl={curl}
          />
        </Canvas>
      </div>
    </>
  );
}

export default Installation;
