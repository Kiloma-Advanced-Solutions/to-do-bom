import React from 'react';
import styles from './page.module.css';

const Page: React.FC = () => {
  return (
    <div className={styles.globalContainer}>
      <h1>MDevs 2024 Bootcamp</h1>
      <h3>Intructor: Eyal Benjamin</h3>
      <p>Welcome your first training week</p>
    </div>
  );
};

export default Page;