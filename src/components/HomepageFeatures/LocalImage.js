import React from 'react';
import styles from './styles.module.css';

const LocalImage = ({ alt, width, height }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={require('@site/static/img/cat.png').default} alt={alt} width={width} height={height} className={styles.image} />
    </div>
  );
};

export default LocalImage;
