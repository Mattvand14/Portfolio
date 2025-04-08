import React, { useEffect, useState } from 'react';

const SoundCloudEmbed = ({ trackUrl }) => {
  const [embedHtml, setEmbedHtml] = useState('');

  useEffect(() => {
    const fetchEmbed = async () => {
      try {
        const res = await fetch(
          `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(trackUrl)}`
        );
        const data = await res.json();
        setEmbedHtml(data.html);
      } catch (err) {
        console.error('SoundCloud embed fetch failed:', err);
      }
    };

    fetchEmbed();
  }, [trackUrl]);

  return (
    <div
      className="w-full max-w-xl"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
};

export default SoundCloudEmbed;
