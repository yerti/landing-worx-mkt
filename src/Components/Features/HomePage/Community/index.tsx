import React from 'react';
import styles from './styles.module.css';

export default function Community() {
  return (
    <div className={styles.contentCommunity}>
      <div>
        <h1>Únete a nuestra comunidad</h1>
        <p className={styles.descriptionCommunity}>
          ¡Únete a nuestra comunidad de WhatsApp para recibir novedades,
          consejos exclusivos y conectar con otros empresarios! ¡Te esperamos!
        </p>
      </div>
      <div className={styles.contentButtonCommunity}>
        <div className={styles.buttonCommunityDiscord}>
          <a href=''>Discord</a>
        </div>
        <div className={styles.buttonCommunity}>
          <a
            href='https://chat.whatsapp.com/I2DZDKp94Ha5XcdJsGRXDi'
            target='_blank'
            rel='noopener noreferrer'
          >
            Comunidad en WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
