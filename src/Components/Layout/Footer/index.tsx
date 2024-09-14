import React from "react";
import styles from "./styles.module.css";
import FacebookIcon from "@/Components/Icons/FacebookIcon";
import InstagramIcon from "@/Components/Icons/InstagramIcon";
import LinkedinIcon from "@/Components/Icons/LinkedinIcon";
import TwiterIcon from "@/Components/Icons/TwiterIcon";

export default function Footer() {
  return (
    <section className={styles.contentTotalFooter}>
      <div className={styles.containerFooter}>
        <div className={styles.contentColumnFoter}>
          <div>
            <div>
              <a href="">
                <img
                  src="https://vibetech-html.vercel.app/assets/images/logo-3.svg"
                  alt="logo footer"
                />
              </a>
              <p className={styles.contentTextParrafo}>
                Conditions Terms of Use Our Services New Guests List The Team
                List
              </p>
            </div>
            <div>
              <h3>Subscribe:</h3>
              <div className={styles.contetnInputControl}>
                <label htmlFor="gamil">
                  E-mail
                  <input type="text" id="gmail" />
                </label>
                <button>
                  <img src="/images/send-sharp.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3>Our Services</h3>
            <div>
              <ul className={styles.contentLisColumTwo}>
                <li>
                  <a href="#">Health Service</a>
                </li>
                <li>
                  <a href="#">Cancer Service</a>
                </li>
                <li>
                  <a href="#">Heart Service</a>
                </li>
                <li>
                  <a href="#">Kidney Service</a>
                </li>
                <li>
                  <a href="#">Diabetics</a>
                </li>
                <li>
                  <a href="#">Others Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className={styles.contentLisColumTwo}>
              <li>
                <img src="/images/location-sharp.svg" alt="" />
                <a href="#">2715 Ash Dr. San Jose</a>
              </li>
              <li>
                <img src="/images/call.svg" alt="" />
                <a href="">(704) 555-0127</a>
              </li>
              <li>
                <img src="/images/mail.svg" alt="" />
                <a href="">infoname@mail.com</a>
              </li>
            </ul>
          </div>
          <div className={styles.contentFourColumn}>
            <h3>Follow Us</h3>
            <p className={styles.contentTextParrafo}>
              Lorem Ipsum is simply is duma omy is text Lorem Ipsum is simply is
              out no our o dummy text.
            </p>
            <ul className={styles.listIconAcount}>
              <li>
                <a href="#">
                  <FacebookIcon color="#f44730" />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon color="#f44730" />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedinIcon color="#f44730" />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwiterIcon color="#f44730" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          className={styles.imageFooterBackground}
          src="https://vibetech-html.vercel.app/assets/images/shape/footer-two-sp.png"
          alt=""
        />
      </div>
      <div className={styles.contentFooterCopyRight}>
        <div>
          <p>© Copyright 2023, All Rights Reserved by Mthemeus</p>
        </div>
        <div>
          <ul className={styles.listContentFooterCopyRight }>
            <li>
              <a href="">Trams & Condition</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
