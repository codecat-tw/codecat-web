import React from 'react';
import './PartnerCarousel.css';

const partners = [
  { name: '新北市立中和高中校隊', logo: '/img/logo/chshs.png', link: '/' },
  { name: 'FRC8569', logo: '/img/logo/frc8569.png', link: '/' },
  { name: 'YD遊戲頻', logo: '/img/logo/playeryd.png', link: '/' },
  { name: '明月楓夜', logo: '/img/logo/bright_moon_fall_night.png', link: '/' },
];

const PartnerCarousel = () => {
  return (
    <div className="partner-carousel">
      <div className="carousel-content">
        {partners.map((partner, index) => (
          <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-item">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <span className="partner-name">{partner.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
