"use client";

import React, { useState } from 'react';
import styles from './Card.module.css';

interface CardProps {
  image: string;
  name: string;
  title: string;
  facebook: string;
  linkedin: string;
  email: string;
}

const Card: React.FC<CardProps> = ({
  image,
  name,
  title,
  facebook,
  linkedin,
  email,
}) => {
  // use state to toggle the icons visibility
  const [showIcons, setShowIcons] = useState(false);

  // handle the click event on the button
  const handleClick = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.content}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <div className={styles.button} onClick={handleClick}>
        {showIcons ? '-' : '+'} {}
      </div>
      {showIcons && (
        <div className={styles.icons}>
          <a href={facebook} target="_blank" rel="noreferrer">
            <img src="/facebook.svg" alt="Facebook" className={styles.icon} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className={styles.icon} />
          </a>
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <img src="/mail.svg" alt="Email" className={styles.icon} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;