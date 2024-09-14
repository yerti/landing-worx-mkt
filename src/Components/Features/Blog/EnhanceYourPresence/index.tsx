'use client'
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { BlogType } from "@/types/entities/BlogType";
import blogService from "@/service/blog.service";
import ControlSearch from "@/Components/Commons/ControlSearch";


export default function EnhanceYourPresence() {
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
    <section className={styles.contentTotalEnhanceYourPresence}>
      <div className={styles.contentColumnOneEnhanceYourPresence}>
        <img
          className={styles.imagenEnhanceYourPresence}
          src="/images/imagen_5.svg"
          alt=""
        />
        <h2>
          Potencia tu Presencia Digital: 7 Pasos Clave para Pequeñas Empresas
        </h2>
        <p>
          En el mundo actual, si tu negocio no está en línea, ¡es como si no
          existiera! Pero sabemos que dar el salto al marketing digital puede
          ser todo un reto, especialmente para las pequeñas empresas. No te
          preocupes, estamos aquí para guiarte. Descubre 7 pasos prácticos y
          sencillos que te ayudarán a mejorar la presencia en línea de tu
          empresa, sin importar tu industria o tamaño. ¡Es hora de hacer que tu
          negocio brille en la web!
        </p>
        <h3>Paso 1: Claridad ante todo</h3>
        <p>
          Antes de sumergirte en el mundo digital, tómate un momento para
          definir qué quieres lograr. ¿Buscas aumentar tus ventas, mejorar la
          visibilidad de tu marca, o simplemente informar a tus clientes sobre
          lo que ofreces? Tener objetivos claros no solo te ayudará a enfocar
          tus esfuerzos, sino que también te permitirá medir el impacto real de
          tus acciones en línea. ¡Enfócate y alcanza el éxito!
        </p>
        <div className={styles.textEnhanceYourPresence}>
          <div>
            <h3>Paso 2: Construye tu base digital</h3>
            <p>
              Tu sitio web es el corazón de tu presencia en línea. Es el lugar
              donde tus clientes descubrirán quién eres y qué ofreces. Asegúrate
              de que sea fácil de navegar, visualmente atractivo, y optimizado
              para dispositivos móviles. Un sitio web bien diseñado no solo
              atraerá a más visitantes, sino que también dejará una impresión
              duradera. ¡Haz que cada clic cuente!
            </p>
          </div>
          <img src="/images/imagen_10.svg" alt="" />
        </div>
        <h3>Paso 3: Conéctate con el mundo</h3>
        <p>
          Las redes sociales son la puerta de entrada para conectar con tus
          clientes y promocionar lo que haces. Elige las plataformas que mejor
          se alineen con tu negocio y crea perfiles que reflejen tu
          profesionalismo. Publica contenido relevante y atractivo de manera
          regular, y no olvides interactuar con tus seguidores. ¡Las
          conversaciones auténticas construyen relaciones duraderas!
        </p>
        <h3>Paso 4: Destaca en las búsquedas</h3>
        <p>
          Para que tu sitio web no se pierda en la inmensidad de internet,
          necesitas optimizarlo para los motores de búsqueda (SEO). Asegúrate de
          que cada página tenga un título y una meta descripción que capten la
          atención, y usa palabras clave estratégicas en tu contenido. ¡Haz que
          tu negocio sea fácil de encontrar y difícil de ignorar en los
          resultados de búsqueda!
        </p>
        <div className={styles.textEnhanceYourPresence}>
          <img src="/images/imagen_11.svg" alt="" />
          <div>
            <h3>Paso 5: Captura y retén</h3>
            <p>
              Tu sitio web es el corazón de tu presencia en línea. Es el lugar
              donde tus clientes descubrirán quién eres y qué ofreces. Asegúrate
              de que sea fácil de navegar, visualmente atractivo, y optimizado
              para dispositivos móviles. Un sitio web bien diseñado no solo
              atraerá a más visitantes, sino que también dejará una impresión
              duradera. ¡Haz que cada clic cuente!
            </p>
          </div>
        </div>
        <h3>Paso 6: Mantén el contacto</h3>
        <p>
          El email marketing es una herramienta poderosa para mantener a tus
          clientes al tanto de tus novedades. Construye una lista de correos y
          envía newsletters periódicos con ofertas exclusivas, actualizaciones
          importantes y consejos útiles. ¡Haz que cada correo sea una
          oportunidad para fortalecer la relación con tus clientes y mantener tu
          marca en su mente!
        </p>
        <h3>Paso 7: Evoluciona continuamente</h3>
        <p>
          El éxito en línea no es estático; es vital monitorear tus resultados y
          ajustar tus estrategias sobre la marcha. Utiliza herramientas de
          análisis para medir lo que funciona y lo que no. Luego, afina tu
          enfoque para maximizar los resultados. ¡La clave es adaptarse y
          evolucionar continuamente para mantenerse un paso adelante!
        </p>
        <div className={styles.imagenOneEnhanceYourPresence}>
          <img src="/images/imagen_12.svg" alt="" />
        </div>
        <p>
          Mejorar la presencia en línea de tu pequeña empresa no tiene por qué
          ser complicado. Con estos 7 pasos, puedes aumentar tu visibilidad,
          impulsar tus ventas y conectar de manera efectiva con tus clientes.
          Recuerda, el éxito digital es un proceso continuo: monitorea tus
          resultados y ajusta tus estrategias para mantenerte siempre en la
          cima. ¡Empieza hoy y haz que tu negocio brille en el mundo online!
        </p>
        <h3>Fuentes:</h3>
        <div className={styles.benefitsTransformYourBusinessRoute}>
          <ul>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Casarotto, C. (2021, marzo 29). Cómo enfrentar las demandas y los
              desafíos de expandir la presencia digital de las empresas. Rock
              Content - ES; Rock Content.
              <a
                href="https://rockcontent.com/es/blog/presencia-digital-de-las-empresas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rockcontent.com/es/blog/presencia-digital-de-las-empresas/
              </a>
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Tomas, D., & Cyberclick. (s/f). 20 formas de incrementar tu
              presencia online. Cyberclick.es. Recuperado el 2 de septiembre de
              2024, de
              <a
                href="https://www.cyberclick.es/numerical-blog/formas-de-incrementar-tu-presencia-online"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.cyberclick.es/numerical-blog/formas-de-incrementar-tu-presencia-online
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.contentColumnTwoEnhanceYourPresence}>
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
