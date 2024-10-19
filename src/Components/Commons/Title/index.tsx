import React from 'react'
import styles from './styles.module.css'

interface TitleProps {
    nameTitle: string
}
export default function Title({nameTitle}:TitleProps) {
  return (
    <h2  className={styles.titleTotal}>{nameTitle}</h2>
  )
}
