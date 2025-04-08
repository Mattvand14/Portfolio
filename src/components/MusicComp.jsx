import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import SoundCloudEmbed from './SoundCloudEmbed';

const Music = () => {
  const trackUrls = [
    'https://soundcloud.com/matthew-vandeusen/davids-angels-1?si=b89aaf801e824a2ab379e0787759f0b9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/into-you-2?si=5045cb0b0e744aa383dccfcdf4ba8f04&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/unanswered-prayers?si=4a529251285641eca037aa465ab70e1f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/shanghai-bass-club-edit-3?si=33b4af1b926b452bb2c0e16cf542c5a5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/if-i-1?si=d255714bf2c940b38edddf2be03e0627&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/red-corridor?si=3de102037bf842108e3f4b70cce80b4a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/are-you-ready-1?si=56d73e37db0b43e3beb91a9c2bae2145&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/shanghai-bass?si=2efaa99b36c74d8a8f83a43a78daf0b5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/lunar-ecplise?si=1742a005b938413591e17817a6cccb3f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/blue-light?si=b12aad2a0c52469bbdeb64fc79f67680&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/when-we-began?si=039a04ede1e54ad7aa2650e5fe234a4a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    'https://soundcloud.com/matthew-vandeusen/byte-choir?si=e83994a6db1f4244b19af4db6455af2a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Music</p>
        <h2 className={styles.sectionHeadText}>SoundCloud Songs</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {trackUrls.map((url, index) => (
          <SoundCloudEmbed key={index} trackUrl={url} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Music, 'music');
