import React from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import {Tilt} from 'react-tilt';

const MusicCard = ({ song }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='relative bg-gradient-to-b from-[#7BAFD4] to-white p-[3px] rounded-2xl sm:w-[360px] w-full shadow-card'
      >
        <div className='bg-tertiary p-5 rounded-2xl w-full h-full'>
          <p className='text-lg font-semibold'>{song}</p>
          <audio controls src={`music/${song}`} />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Music = () => {
  const songs = [
    'Up North.wav',
    'fun edm.mp3',
    'when we began.mp3',
    'Missed Me mix.mp3'
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Music</p>
        <h2 className={`${styles.sectionHeadText}`}>Songs.</h2>
      </motion.div>

      <div className='flex flex-wrap gap-4'>
        {songs.map((song, index) => (
          <MusicCard key={index} song={song} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Music, "");
