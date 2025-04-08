import React, { useEffect, useState } from 'react';

const SoundCloudEmbed = ({ trackUrl, height = 120 }) => {
  const [embedHtml, setEmbedHtml] = useState('');

  useEffect(() => {
    const fetchEmbed = async () => {
      try {
        const res = await fetch(
          `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(trackUrl)}`
        );
        const data = await res.json();

        // Manually replace the height in the returned HTML
        const resizedHtml = data.html.replace(/height="\d+"/, `height="${height}"`);
        setEmbedHtml(resizedHtml);
      } catch (err) {
        console.error('SoundCloud embed fetch failed:', err);
      }
    };

    fetchEmbed();
  }, [trackUrl, height]);

  return (
    <div
      className="w-full max-w-sm"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
};

export default SoundCloudEmbed;
