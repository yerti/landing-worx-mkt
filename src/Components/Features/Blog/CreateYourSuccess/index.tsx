import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { BlogType } from "@/types/entities/BlogType";
import blogService from "@/service/blog.service";
import ControlSearch from "@/Components/Commons/ControlSearch";


export default function CreateYourSuccess() {
  const [blogList, setBlogList] = useState<BlogType[]>([]);

  const fetchBlogList = async () => {
    try {
      const blogList = await blogService.list();
      setBlogList(blogList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchBlogList();
  }, []);
  return (
    <section className={styles.contentTotalCreateYourSuccess}>
      <div className={styles.contentOneColumnCreateYourSuccess}>
        <img
          className={styles.imagenEnhanceYourPresence}
          src="/images/imagen_6.svg"
          alt=""
        />
        <h2>
          Crea tu Éxito Online: Guía Paso a Paso para un Plan de Marketing
          Digital Efectivo
        </h2>
        <p>
          En la era digital, tener un plan de marketing bien definido es
          esencial para cualquier empresa que busque alcanzar sus objetivos y
          conectar de manera efectiva con sus clientes. Pero sabemos que para
          las pequeñas empresas, este proceso puede parecer un desafío. No te
          preocupes, estamos aquí para ayudarte. En este artículo, te
          presentamos una guía paso a paso para crear un plan de marketing
          digital que realmente funcione y te acerque al éxito. ¡Es hora de
          llevar tu negocio al siguiente nivel!
        </p>
        <h3>El Primer Paso hacia tu Éxito Digital</h3>
        <div className={styles.textEnhanceYourPresenceReverse}>
          <p>
            Antes de lanzarte a crear un plan de marketing digital, es crucial
            detenerte a analizar la competencia y definir tus objetivos.
            ¿Quiénes son tus competidores directos? ¿Qué están haciendo bien y
            en qué áreas están fallando? Identificar estas oportunidades te
            permitirá diferenciarte. Además, establecer objetivos claros te dará
            un enfoque preciso y te permitirá medir el éxito de tus esfuerzos.
            Este primer paso es la base sobre la que construirás un plan de
            marketing digital poderoso y efectivo.
          </p>
          <img src="/images/imagen_7.svg" alt="" />
        </div>
        <h3>Conoce a tu Audiencia</h3>
        <p>
          Para que tu plan de marketing digital tenga impacto, es esencial que
          identifiques a tu público objetivo y desarrolles buyer personas
          detalladas. ¿Quiénes son tus clientes ideales? ¿Qué les apasiona y qué
          les molesta? ¿Qué desafíos enfrentan y cómo puedes ofrecerles
          soluciones? Al crear buyer personas, podrás diseñar contenido y
          campañas que realmente conecten con tu audiencia, haciendo que cada
          interacción sea relevante y efectiva.
        </p>
        <h3>Elige Tus Armas</h3>
        <div className={styles.textEnhanceYourPresence}>
          <img src="/images/imagen_8.svg" alt="" />
          <p>
            Antes de lanzarte a crear un plan de marketing digital, es crucial
            detenerte a analizar la competencia y definir tus objetivos.
            ¿Quiénes son tus competidores directos? ¿Qué están haciendo bien y
            en qué áreas están fallando? Identificar estas oportunidades te
            permitirá diferenciarte. Además, establecer objetivos claros te dará
            un enfoque preciso y te permitirá medir el éxito de tus esfuerzos.
            Este primer paso es la base sobre la que construirás un plan de
            marketing digital poderoso y efectivo.
          </p>
        </div>
        <h3>Mide, Analiza y Mejora</h3>
        <p>
          El éxito de tu plan de marketing digital no termina en la ejecución;
          es crucial medir y seguir de cerca su rendimiento. ¿Qué indicadores
          clave de rendimiento (KPI) deberías monitorear? ¿Cómo puedes afinar
          tus estrategias para obtener mejores resultados? Las herramientas de
          análisis te proporcionan los datos necesarios para evaluar tu progreso
          y hacer ajustes estratégicos en tiempo real. La clave está en medir,
          analizar y mejorar constantemente para asegurarte de que tu plan esté
          siempre optimizado para el éxito.
        </p>
        <div className={styles.imagenOneEnhanceYourPresence}>
          <img src="/images/imagen_9.svg" alt="" />
        </div>
        <p>
          Crear un plan de marketing digital no tiene por qué ser complicado.
          Siguiendo estos pasos, estarás en camino de diseñar una estrategia
          efectiva que te permitirá alcanzar tus objetivos y conectar de manera
          significativa con tus clientes. Recuerda, el marketing digital es un
          proceso dinámico y en constante evolución. Mantente atento a los
          resultados, ajusta tus estrategias cuando sea necesario, y sigue
          perfeccionando tu enfoque para mantener tu negocio siempre en
          movimiento.
        </p>
        <h3>Fuentes:</h3>
        <div className={styles.benefitsTransformYourBusiness}>
          <ul>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Santos, D. (2023). Cómo crear un plan de marketing digital
              excepcional (paso a paso). Hubspot.es.
              <a
                href="https://blog.hubspot.es/marketing/como-crear-plan-marketing-digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://blog.hubspot.es/marketing/como-crear-plan-marketing-digital
              </a>
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Thai, J. (2024). Crea una estrategia de marketing digital en 12
              días [2024] •. Asana.
              <a
                href="https://asana.com/es/resources/digital-marketing-strategy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://asana.com/es/resources/digital-marketing-strategy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.contentTwoColumnCreateYourSuccess}>
        <div className={styles.contentTargetColumnTwoSearch}>
          <ControlSearch labelName="Search" value={""} />
        </div>
        <div className={styles.contentTargetColumnTwo}>
          <h3>Category</h3>
          <a href="">
            Finance & Banking <span>02</span>
          </a>
          <a href="">
            Business Advice <span>05</span>
          </a>
        </div>
        <div className={styles.contentTargetColumnThree}>
          <h3>Publicaciones recientes</h3>
          {blogList.map((index, item) => (
            <div className={styles.targetSmall} key={item}>
              <img
                className={styles.imageTargetSmall}
                src={index.image}
                alt=""
              />
              <div className={styles.textTragetSmall}>
                <p>
                  Estándar <span>{index.publishedDate}</span>
                </p>
                <a href={`/blog/${index.idBlog}`}>{index.title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
