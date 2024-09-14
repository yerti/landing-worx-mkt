import React from "react";
import styles from './styles.module.css'

interface StatisticsType {
  name: string;
  icon: string;
  amount: number;
}

export default function StatisticsSection() {
  const listStatistics: StatisticsType[] = [
    {
      name: "Team member",
      icon: "https://vibetech-html.vercel.app/assets/images/icon/consulting.svg",
      amount: 20,
    },
    {
      name: "Clients Review",
      icon: "https://vibetech-html.vercel.app/assets/images/icon/consulting.svg",
      amount: 35,
    },
    {
      name: "Happy Clients",
      icon: "https://vibetech-html.vercel.app/assets/images/icon/consulting.svg",
      amount: 22,
    },
    {
      name: "Project Complete",
      icon: "https://vibetech-html.vercel.app/assets/images/icon/consulting.svg",
      amount: 2,
    },
  ];
  return <section className={styles.contentTotalSectionStatisticsSection}>
    <div className={styles.contentCardsStatisticsSection}>
        {listStatistics.map( (index, item) => (
            <div className={styles.cardStatisticss}>
                <div className={styles.iconStatistics}>
                    <img src={index.icon} alt="" />
                </div>
                <div className={styles.contentTextStatistics}>
                    <h2>{index.amount}K+</h2>
                    <h3>{index.name}</h3>
                </div>
            </div>
        ))}
    </div>
  </section>;
}
