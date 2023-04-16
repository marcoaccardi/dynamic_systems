import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GranularSynth(props) {
  const { density } = props;
  const audioContext = useRef(new AudioContext()).current;
  const [sourceNode, setSourceNode] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const gainNode = useRef(null).current;
  const grainPlayer = useRef(null).current;

  useEffect(() => {
    // Load the audio file
    fetch('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        // Slice the audio file into grains
        const grainSize = 0.1; // 100 milliseconds
        const grainOverlap = 0.05; // 50 milliseconds
        const grainCount = Math.ceil(audioBuffer.duration / grainSize);
        const grainArray = new Array(grainCount);

        for (let i = 0; i < grainCount; i++) {
          const grainStart = i * grainSize;
          const grainEnd = Math.min(
            grainStart + grainSize + grainOverlap,
            audioBuffer.duration
          );
          const grainDuration = grainEnd - grainStart;
          const grain = audioContext.createBuffer(
            1,
            grainDuration * audioBuffer.sampleRate,
            audioBuffer.sampleRate
          );
          const grainData = audioBuffer
            .getChannelData(0)
            .slice(
              grainStart * audioBuffer.sampleRate,
              grainEnd * audioBuffer.sampleRate
            );
          grain.getChannelData(0).set(grainData);
          grainArray[i] = grain;
        }

        // Create the source node
        const sourceNode = audioContext.createBufferSource();
        sourceNode.buffer = audioBuffer;
        sourceNode.loop = true;
        setSourceNode(sourceNode);

        // Create the granular synthesis nodes
        gainNode.gain.value = density;
        grainPlayer.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Play back the grains randomly
        function playGrain() {
          const grainIndex = Math.floor(Math.random() * grainCount);
          grainPlayer.buffer = grainArray[grainIndex];
          grainPlayer.playbackRate.value = Math.random() * 2 - 1; // -1 to 1
          grainPlayer.start();
        }
        setInterval(playGrain, 50);
      });
  }, []);

  useEffect(() => {
    if (gainNode) {
      const { x, y } = mousePosition;
      const density = 0.5 + x * 0.5; // Map mouse x position to a range of 0.5 to 1.0
      const pan = (y - 0.5) * 2; // Map mouse y position to a range of -1.0 to 1.0
      gainNode.gain.value = density;
      grainPlayer.pan.value = pan;
    }
  }, [density, mousePosition]);

  const pannerNode = audioContext.createStereoPanner();
  console.log(pannerNode);
  grainPlayer.connect(pannerNode);
  pannerNode.connect(gainNode);

  useFrame(({ mouse }) => {
    setMousePosition({ x: mouse.x, y: mouse.y });
  });

  return null; // This component doesn't render anything in the scene
}

export default GranularSynth;
