import React from "react";
import styles from "./styles.module.css";
import FacebookIcon from "@/Components/Icons/FacebookIcon";
import InstagramIcon from "@/Components/Icons/InstagramIcon";
import LinkedinIcon from "@/Components/Icons/LinkedinIcon";
import TwiterIcon from "@/Components/Icons/TwiterIcon";
import LogoBlack from "@/Components/Icons/LogoBlack";
import Link from "next/link";

export default function Footer() {
  return (
    <section className={styles.contentTotalFooter}>
      <div className={styles.containerFooter}>
        <div className={styles.contentColumnFoter}>
          <div>
            <div>
              <a href="/home">
                <LogoBlack />
              </a>
              <div className={styles.contentTextParrafo}>
                <p>
                  Condiciones Términos de Uso Nuestros Servicios Lista de Nuevos
                  Huéspedes
                </p>
                <p>Lista del Equipo</p>
              </div>
            </div>
            <div>
              <h3>Suscribir:</h3>
              <div className={styles.contetnInputControl}>
                <label htmlFor="gamil">
                  Correo electrónico
                  <input type="text" id="gmail" />
                </label>
                <button>
                  <img src="/images/send-sharp.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h3>Nuestros servicios</h3>
            <div>
              <ul className={styles.contentLisColumTwo}>
                <li>
                  <Link href="/servicio/adquisicion">
                    Adquisición de Clientes
                  </Link>
                </li>
                <li>
                  <Link href="/servicio/optimizacion">
                    Optimización del Customer Journey
                  </Link>
                </li>
                <li>
                  <Link href="/servicio/retencion">Retención de Clientes</Link>
                </li>
                <li>
                  <Link href="/servicio/marketing">Marketing Digital</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Contacto</h3>
            <ul className={styles.contentLisColumTwo}>
              {/* <li>
                <img src="/images/location-sharp.svg" alt="" />
                <a href="#">2715 Ash Dr. San Jose</a>
              </li>
              <li>
                <img src="/images/call.svg" alt="" />
                <a href="">(704) 555-0127</a>
              </li> */}
              <li>
                <img src="/images/mail.svg" alt="" />
                <a href="">infoname@mail.com</a>
              </li>
            </ul>
          </div>
          <div className={styles.contentFourColumn}>
            <h3>Síganos</h3>
            
            <ul className={styles.listIconAcount}>
              <li>
                <a href="#">
                  <FacebookIcon color="#48534F" />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon color="#48534F" />
                </a>
              </li>
              <li>
                <a href="#">
                  <LinkedinIcon color="#48534F" />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwiterIcon color="#48534F" />
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
          <ul className={styles.listContentFooterCopyRight}>
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
