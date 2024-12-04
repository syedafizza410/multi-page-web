import React, { useState } from 'react';
import MemoryCard from './MemoryCard';
import Modal from './Modal';
import image1 from '../assets/memory 9.jpg';
import video1 from '../assets/memory 11.mp4';
import video2 from '../assets/memory 2.mp4';
import video3 from '../assets/memory13.mp4'
import video4 from '../assets/memory 6.mp4'
import video5 from '../assets/memory 5.mp4'
import image2 from '../assets/memory 7.jpg'
import video6 from '../assets/memory 8.mp4'
import video7 from '../assets/memory3.mp4'
import video8 from '../assets/memory 1.mp4'
import video9 from '../assets/memory 12.mp4'

interface Memory {
  id: number;
  imageSrc?: string;
  videoSrc?: string; 
  title: string;
  description: string;
  isVideo: boolean;
}

const MemoriesPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<{ src: string; isVideo: boolean }>({ src: '', isVideo: false });

  const memories: Memory[] = [
    {
      id: 1,
      imageSrc: image1,
      title: 'Memory 1',
      description: 'When we meet first time, i have welcomed her with this note',
      isVideo: false,
    },
    {
      id: 2,
      videoSrc: video1,
      title: 'Memory 2',
      description: 'First gift from her ',
      isVideo: true,
    },
    {
      id: 3,
      videoSrc: video3,
      title: 'Memory 3',
      description: 'When we meet first time',
      isVideo: true,
    },
    {
      id: 4,
      videoSrc: video4,
      title: 'Memory 4',
      description: 'When we meet second time at her home, she welcomed me with this card',
      isVideo: true,
    },
    {
      id: 5,
      videoSrc: video5,
      title: 'Memory 5',
      description: 'When i was traveling to sukkur with her from her home',
      isVideo: true,
    },
    {
      id: 6,
      imageSrc: image2,
      title: 'Memory 6',
      description: 'Traveling with best friend is the most beautiful and memorable moment of life',
      isVideo: false,
    },
    {
      id: 7,
      videoSrc: video6,
      title: 'Memory 7',
      description: 'Our second day in her city',
      isVideo: true,
    },
    {
      id: 8,
      videoSrc: video2,
      title: 'Memory 8',
      description: 'Spending time and make our every moment memorable',
      isVideo: true,
    },
    {
      id: 9,
      videoSrc: video7,
      title: 'Memory 9',
      description: 'When we meet third time in her city at her home',
      isVideo: true,
    },
    {
      id: 10,
      videoSrc: video8,
      title: 'Memory 10',
      description: 'When we going on walk togetter at 5am  😂',
      isVideo: true,
    },
    {
      id: 11,
      videoSrc: video9,
      title: 'Memory 11',
      description: 'Thakaan ke bawajood khidmat 😂 "she posted a snapstreak of me 😂"',
      isVideo: true,
    },
  ];

  const openModal = (mediaSrc: string, isVideo: boolean) => {
    setCurrentMedia({ src: mediaSrc, isVideo });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="memories-page">
      <div className="images-section">
        <h2>Images and Videos</h2>
        <div className="memories-container">
          {memories.map(memory => (
            <MemoryCard
              key={memory.id}
              imageSrc={memory.imageSrc!} 
              videoSrc={memory.videoSrc} 
              title={memory.title}
              description={memory.description}
              isVideo={memory.isVideo}
              onClick={openModal} 
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        mediaSrc={currentMedia.src}
        isVideo={currentMedia.isVideo}
      />
    </div>
  );
};

export default MemoriesPage;
