import React, { useState } from 'react';
import styles from './Sidebar.module.css';

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleSidebar} className={styles.sidebarButton}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;