import React from 'react';
import myImage from '../assets/qabaphoto.jpg';
import myVedio from '../assets/home.mp4'

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>𓍯𓂃𓏧♡Our 5 Years of Friendship𓍯𓂃𓏧♡</h1>
      <br/>
      <h2>𝐼𝑛 𝑀𝑎𝑟𝑐ℎ 2025, 𝑜𝑢𝑟 𝑓𝑟𝑖𝑒𝑛𝑑𝑠ℎ𝑖𝑝 𝑤𝑖𝑙𝑙 𝑐𝑜𝑚𝑝𝑙𝑒𝑡𝑒 6 𝑦𝑒𝑎𝑟𝑠 ❤️</h2>
      <br/>
      <br/>
      <p>🧿This site celebrates the memories of our friendship🧿</p>
      <p>"Alhamdullilah ❤️ Allah has given us the chance to reach our names and prayers to Khane Kaba"
      </p>
      <div className="media-section">
      <video src={myVedio} autoPlay loop muted className="home-video" />
      <img src={myImage} alt="Home" className="home-image" />
      </div>
    </div>
  );
};

export default Home;
