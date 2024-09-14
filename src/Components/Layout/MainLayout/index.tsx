import React, { PropsWithChildren } from 'react';
import MainSection from '../MainSection';
import styles from './styles.module.css';
import menuService from '@/service/menu.service';
import NavigationBar from '../NavigationBar';



export default async function MainLayout({ children }: PropsWithChildren) {
  const menu = await menuService.list();
  return (
    <div className={styles.layoutContainer}>
      <NavigationBar menu={menu} />
      <MainSection>
        <div>
          {children}
        </div>
      </MainSection>
    </div>
  )
}
