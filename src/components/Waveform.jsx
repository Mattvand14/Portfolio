import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Waveform = ({ songUrl }) => {
  const waveformRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveSurferRef.current) {
      waveSurferRef.current.destroy();
    }

    waveSurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#7BAFD4',
      progressColor: '#00BFFF',
      cursorColor: '#FF4500',
      barWidth: 2,
      height: 80,
      responsive: true,
    });

    waveSurferRef.current.load(songUrl);

    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
      }
    };
  }, [songUrl]);

  const playPause = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div ref={waveformRef} className="waveform"></div> {/* Waveform container */}
      <button 
        onClick={playPause} 
        className="bg-gradient-to-b from-[#7BAFD4] to-white p-[3px] rounded-full w-12 h-12 flex justify-center items-center transition duration-300"
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-tertiary w-6 h-6" />
      </button>
    </div>
  );
};

export default Waveform;
