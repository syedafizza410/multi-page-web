import React from 'react';

interface MemoryCardProps {
  imageSrc: string;
  videoSrc?: string;
  title: string;
  description: string;
  isVideo: boolean;
  onClick: (mediaSrc: string, isVideo: boolean) => void;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ imageSrc, videoSrc, title, description, isVideo, onClick }) => {
  const handleClick = () => {
    onClick(isVideo ? videoSrc! : imageSrc, isVideo); 
  };

  return (
    <div className="memory-card" onClick={handleClick}>
      {isVideo ? (
        <video className="memory-video" src={videoSrc} muted />
      ) : (
        <img className="memory-image" src={imageSrc} alt={title} />
      )}
      <div className="memory-overlay">
        <div className="memory-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
