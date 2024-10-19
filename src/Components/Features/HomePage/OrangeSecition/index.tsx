import React from 'react'
import styles from './styles.module.css'

interface OrangeSection {
    children: React.ReactNode; 
}

export default function OrangeSeciton({children}: OrangeSection) {
  return (
    <div className={styles.contentSectionOrange}>
      {children}
    </div>
  )
}
