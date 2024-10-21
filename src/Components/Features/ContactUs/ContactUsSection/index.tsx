import SubTitle from '@/Components/Commons/SubTitle';
import Title from '@/Components/Commons/Title';
import CallIcon from '@/Components/Icons/CallIcon';
import LocationIcon from '@/Components/Icons/LocationIcon';
import React from 'react';
import styles from './styles.module.css';
import MailIcon from '@/Components/Icons/MailIcon';

export default function contentTotalContactUsSection() {
  return (
    <section className={styles.contentTotalContactUsSection}>
      <div className={styles.columnOnecontentTotalContactUsSection}>
        <div>
          <Title nameTitle='Contáctanos' />
          <SubTitle nameSubTitle='Ponte en contacto con nosotros' />
        </div>
        <div className={styles.contentColumnOneDetailService}>
          {/* <div className={styles.contentTextImgDetailService}>
            <LocationIcon w='24' h='24' color='#48534F' />
            <div className={styles.textDetailService}>
              <h3>Location</h3>
              <p>Dhaka 102, utl 1216, road 45 house of street</p>
            </div>
          </div> */}
          {/* <div className={styles.contentTextImgDetailService}>
            <CallIcon w='24' h='24' color='#48534F' />
            <div className={styles.textDetailService}>
              <h3>Call us</h3>
              <div>
                <p>
                  <a href='tel:259008036545256'>2590 - 080 - 365 45 256</a>
                </p>
                <p>
                  <a href='tel:1234023850'>1234 - 023 - 850</a>
                </p>
              </div>
            </div>
          </div> */}
          <div className={styles.contentTextImgDetailService}>
            <MailIcon w='24' h='24' color='#48534F' />
            <div className={styles.textDetailService}>
              <h3>Correo</h3>
              <div>
                <p>
                  <a href='mailto:contacto.workmkt@gmail.com'>
                    contacto.workmkt@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.columnTwocontentTotalContactUsSection}>
        <form
          action='https://formsubmit.co/contacto.workmkt@gmail.com'
          method='POST'
          className={styles.contentInformationContact}
        >
          <div className={styles.contentTwoInputContact}>
            <div className={styles.formContent}>
              <label htmlFor='Nombre'>
                Nombre
                <input type='text' name='name' placeholder='Tú nombre' />
              </label>
            </div>
            <div className={styles.formContent}>
              <label htmlFor='email'>
                Correo Electronico
                <input type='email' name='email' placeholder='tuemail@.com' />
              </label>
            </div>
          </div>

          <div className={styles.formContent}>
            <label htmlFor='comments'>
              Comentarios
              <textarea
                name='comments'
                cols={30}
                rows={4}
                placeholder='Descripción'
              ></textarea>
            </label>
          </div>

          <div className={styles.formContent}>
            <button className={styles.botonEnviar} type='submit'>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
