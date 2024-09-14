import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'
import Footer from '../Footer';

const MainSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.mainSectionContainer}>
      {children}
      <Footer />
    </main>
  )
};

export default MainSection;
