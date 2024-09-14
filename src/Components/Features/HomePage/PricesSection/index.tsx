"use client";
import SubTitle from "@/Components/Commons/SubTitle";
import Title from "@/Components/Commons/Title";
import React, { useState } from "react";
import CardsPrice, { CardsPriceType } from "./CardsPrice";
import styles from "./styles.module.css";

const monthlyPrices: CardsPriceType[] = [
  {
    name: "Basic Plan",
    description: "Lorem Ipsum is simply dummy text of the printing.",
    amount: 19,
    characteristics: [
      { name: "Mistakes To Avoid" },
      { name: "Your Startup" },
      { name: "Knew About Fonts" },
      { name: "Winning Metric for Your Startup" },
    ],
  },
  {
    name: "Standard Plan",
    description: "This plan offers more advanced features.",
    amount: 26,
    characteristics: [
      { name: "Advanced Analytics" },
      { name: "Priority Support" },
      { name: "Custom Branding" },
      { name: "Unlimited Usage" },
    ],
  },
  {
    name: "Extended Plan",
    description: "This plan offers more advanced features.",
    amount: 35,
    characteristics: [
      { name: "Advanced Analytics" },
      { name: "Priority Support" },
      { name: "Custom Branding" },
      { name: "Unlimited Usage" },
    ],
  },
];

const yearlyPrices: CardsPriceType[] = [
  {
    name: "Basic Plan",
    description: "Lorem Ipsum is simply dummy text of the printing.",
    amount: 39,
    characteristics: [
      { name: "Mistakes To Avoid" },
      { name: "Your Startup" },
      { name: "Knew About Fonts" },
      { name: "Winning Metric for Your Startup" },
    ],
  },
  {
    name: "Pro Plan",
    description: "This plan offers more advanced features.",
    amount: 59,
    characteristics: [
      { name: "Advanced Analytics" },
      { name: "Priority Support" },
      { name: "Custom Branding" },
      { name: "Unlimited Usage" },
    ],
  },
  {
    name: "Pro Plan",
    description: "This plan offers more advanced features.",
    amount: 89,
    characteristics: [
      { name: "Advanced Analytics" },
      { name: "Priority Support" },
      { name: "Custom Branding" },
      { name: "Unlimited Usage" },
    ],
  },
];

export default function PricesSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className={styles.contentTotalSectionPrice}>
      <div className={styles.contenTitlePriceSection}>
        <div>
          <Title nameTitle="pricing action" />
          <SubTitle nameSubTitle="Your business <br/> our passion" />
        </div>
        <div className={styles.buttonPrice}>
          <div
            className={`${styles.buttonPriceMonts} ${
              isMonthly ? styles.active : ""
            }`}
            onClick={() => setIsMonthly(true)}
          >
            <p>Monthly</p>
          </div>
          <div
            className={`${styles.buttonPriceYear} ${
              !isMonthly ? styles.active : ""
            }`}
            onClick={() => setIsMonthly(false)}
          >
            <p>Yearly</p>
          </div>
        </div>
      </div>
      <CardsPrice cardsList={isMonthly ? monthlyPrices : yearlyPrices} />
    </section>
  );
}
