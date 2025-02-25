import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <p>© 2023 Your Company</p>
    </footer>
  );
};