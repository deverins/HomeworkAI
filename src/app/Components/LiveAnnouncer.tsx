import React, { useEffect, useRef } from 'react';

interface LiveAnnouncerProps {
  message: string;
}

const LiveAnnouncer: React.FC<LiveAnnouncerProps> = ({ message }) => {
  const liveRegionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.innerText = message;
    }
  }, [message]);

  return (
    <div
      ref={liveRegionRef}
      aria-live="assertive"
      style={{ position: 'absolute', left: '-9999px' }}
    />
  );
};

export default LiveAnnouncer;
