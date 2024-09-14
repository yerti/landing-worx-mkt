"use client";
import { MenuItem } from "@/types/entities/MenuItem";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "@/Components/Commons/Button";
import Link from "next/link";
import LogoBlack from "@/Components/Icons/LogoBlack";

interface NavigationBarProps {
  menu: MenuItem[];
}

export default function NavigationBar({ menu }: NavigationBarProps) {
  const [showList, setShowList] = useState(false);

  const handleOpenShowList = () => {
    setShowList(true);
  };

  const handleCloseShowList = () => {
    setShowList(false);
  };

  return (
    <div className={styles.contentNavigationBar}>
      <div className={styles.imgLogoNavigationBar}>
        <LogoBlack />
      </div>
      <div className={styles.contentListAndButton}>
        <ul className={styles.listMenu}>
          {menu.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Button color="#000" variant="button_white" nameTile="Get a quote" />
      </div>
      <div
        className={styles.contentResponsiveList}
        onClick={handleOpenShowList}
      >
        <img src="/images/list-circle.svg" alt="" />
      </div>
      {showList && (
        <div className={styles.contentResposiveList}>
          <ul className={styles.listMenuresponsive}>
            {menu.map((item, index) => (
              <li key={index} onClick={handleCloseShowList}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <Button
              color="#000"
              variant="button_responsive"
              nameTile="Get a quote"
            />
          </ul>
        </div>
      )}
    </div>
  );
}
