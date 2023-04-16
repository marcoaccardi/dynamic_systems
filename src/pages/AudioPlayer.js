import React, { useEffect, useState } from 'react';
import { Player, Transport } from 'tone';

function AudioPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  function handlePlay() {
    if (player) {
      player.start();
      setIsPlaying(true);
    }
  }

  function handlePause() {
    if (player) {
      player.stop();
      setIsPlaying(false);
      setPlayer(null);
    }
  }

  function handleEnded() {
    setIsPlaying(false);
  }

  function createPlayer() {
    const newPlayer = new Player(src, () => {
      Transport.bpm.value = newPlayer.bpm;
    }).toDestination();

    newPlayer.loop = true;
    newPlayer.autostart = true;

    setPlayer(newPlayer);
  }

  function destroyPlayer() {
    if (player) {
      player.dispose();
      setPlayer(null);
    }
  }

  function togglePlayer() {
    if (isPlaying) {
      handlePause();
      destroyPlayer();
    } else {
      createPlayer();
      handlePlay();
    }
  }

  return (
    <div>
      <button onClick={togglePlayer}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default AudioPlayer;
