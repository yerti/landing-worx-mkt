import React from "react";
import styles from "./styles.module.css";
import Title from "@/Components/Commons/Title";
import SubTitle from "@/Components/Commons/SubTitle";
import Paragraph from "@/Components/Commons/Paragraph";
import IconCopa from "@/Components/Icons/IconCopa";

export default function AboutSection() {
  return (
    <section className={styles.contentAboutSection}>
      <div className={styles.contentInformationAbout}>
        <div className={styles.contentTwoAboutInformation}>
          <div>
            <Title nameTitle="Sobre nosotros" />

            <SubTitle nameSubTitle="Transformando ideas en éxito digital" />

            <Paragraph name="¿Quieres saber cómo podemos ayudarte a transformar tu negocio? Conéctate con nosotros y empecemos a crear algo increíble juntos" />
          </div>
          <div className={styles.contentImgCheckTextAbout}>
            <img
              className={styles.imgAboutTargetOne}
              src="/images/about-info-img-1.png"
              alt=""
            />
            <div>
              <div className={styles.contentImgTextAboutOne}>
                <div className={styles.imgcheckAbouth}>
                  <img src="/images/checkmark-outline.svg" alt="" />
                </div>
                <p>Mistakes To Avoid</p>
              </div>
              <div className={styles.contentImgTextAboutOne}>
                <div className={styles.imgcheckAbouth}>
                  <img src="/images/checkmark-outline.svg" alt="" />
                </div>
                <p>Your Startup</p>
              </div>
              <div className={styles.contentImgTextAboutOne}>
                <div className={styles.imgcheckAbouth}>
                  <img src="/images/checkmark-outline.svg" alt="" />
                </div>
                <p>Knew About Fonts</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentTwoAboutInformationImg}>
          <img
            className={styles.imgAbout}
            src="/images/about-img-2.png"
            alt=""
          />
          <div className={styles.contentTargetOfExperiencies}>
            <div className={styles.textTargetOfExperiences}>
              <IconCopa /><h2>10+</h2>
            </div>
            <h3>Years Of Experiences</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
