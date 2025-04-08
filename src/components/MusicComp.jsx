import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn } from '../utils/motion';
import Waveform from './Waveform';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const MusicCard = ({ song, songUrl }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', 0, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="relative bg-gradient-to-b from-[#7BAFD4] to-white p-[3px] rounded-2xl sm:w-[360px] w-full shadow-card"
      >
        <div className="bg-tertiary p-5 rounded-2xl w-full h-full">
          <p className="text-lg font-semibold">{song}</p>
          <div>
            <image />
          </div>
          <Waveform songUrl={songUrl} />  {/* Add waveform component */}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Music = () => {
  const songs = [
    { title: 'Angel', file: 'Angel Final.wav' },
    { title: 'If I', file: 'If I final pre volume.wav' },
    { title: 'Into You', file: 'Into You Final.wav' },
    { title: 'Lunar Eclipse', file: 'Lunar Ecplise final pre volume.wav' },
    { title: 'Madragada', file: 'Madragada actual final pre volume.wav' },
    { title: 'POWER', file: 'POWER final pre volume.wav' },
    { title: 'Shanghai Bass', file: 'shanghai bass final pre volume.wav' },
    { title: 'Shanghai Bass House Remix', file: 'shanghai bass house remix final.wav' },
    { title: 'The Corridor', file: 'The Corridor final pre volume.wav' },
    { title: 'Unanswered Prayers', file: 'Unanswered Prayers 3.wav' },
    { title: 'When We Began', file: 'when we began.mp3' },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Music</p>
        <h2 className={`${styles.sectionHeadText}`}>Songs.</h2>
      </motion.div>

      <div className="flex flex-wrap gap-4">
        {songs.map((song, index) => (
          <MusicCard 
            key={index} 
            song={song.title} 
            songUrl={`music/${song.file}`}  // Pass the full song URL here
          />
        ))}
      </div>

      <div>
        
      </div>
    </>
  );
};

export default SectionWrapper(Music, "music");

