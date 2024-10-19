import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { BlogType } from "@/types/entities/BlogType";
import blogService from "@/service/blog.service";
import ControlSearch from "@/Components/Commons/ControlSearch";

export default function TransformYourBusiness() {
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
    <section className={styles.contentTransformYourBusiness}>
      <div className={styles.contentOneTransformYourBusiness}>
        <img
          className={styles.imageTransformYourBusiness}
          src="/images/image_1.svg"
          alt="imagen de fondo"
        />
        <h2>Transforma tu negocio con el poder del marketing digital</h2>
        <p>
          ¿Conoces qué es el marketing digital? O acaso ¿Quieres conocer más del
          marketing digital? ¡Este blog es para ti!
        </p>
        <h3>Explora el universo del marketing digital</h3>
        <p>
          El marketing digital es una serie de estrategias que ayudan a
          incrementar el reconocimiento de productos o servicios a través de los
          medios digitales. Utiliza los dispositivos tecnológicos y el internet
          para llegar a los consumidores de forma personalizada y efectiva.
        </p>
        <h3>Beneficios clave del marketing digital para tu empresa</h3>
        <div className={styles.benefitsTransformYourBusiness}>
          <ul>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              <strong>Segmentación precisa: </strong>
              Puedes dirigir tus anuncios a personas específicas según sus
              intereses, edad, ubicación, y más. Así, aseguras que tu mensaje
              llegue a quienes realmente están interesados en tu producto o
              servicio.
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              <strong>Alcance Global: </strong>
              El marketing digital te permite eliminar las barreras geográficas,
              permitiendo que tu negocio esté donde se encuentren tus clientes.
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              <strong>Costo-efectividad: </strong>
              Es más económico que el marketing tradicional y ofrece un mejor
              retorno de inversión (ROI). Esto es especialmente valioso para
              pequeñas y medianas empresas (PYMEs) en Perú que quieren maximizar
              sus recursos.
            </li>
          </ul>
          <img
            className={styles.imagenTwobenefitsTransformYourBusiness}
            src="/images/imagen_2.svg"
            alt=""
          />
        </div>
        <div className={styles.benefitsTransformYourBusiness}>
          <ul>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              <strong>Resultados medibles: </strong>
              Con herramientas de análisis, puedes ver en tiempo real cuántas
              personas han visto tu anuncio, cuántas han hecho clic en él y
              cuántas han comprado tu producto. Esto te permite ajustar tus
              campañas para obtener mejores resultados.
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              <strong>Interacción directa y engagement: </strong>A través de las
              redes sociales y correos electrónicos, puedes comunicarte
              directamente con tus clientes, construyendo una relación sólida y
              fomentando la lealtad y satisfacción.
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              <strong>Personalización: </strong>
              Puedes ofrecer contenido y promociones adaptadas a cada cliente.
              Por ejemplo, un restaurante en Arequipa puede enviar ofertas
              especiales a clientes que lo han visitado antes.
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              <strong>Flexibilidad y adaptabilidad: </strong>
              Las campañas de marketing digital se pueden ajustar rápidamente
              según los resultados y el feedback recibido, permitiéndote ser
              ágil y adaptarte a las necesidades del mercado.
            </li>
          </ul>
        </div>
        <h3>
          Casos de éxito en Perú: Cómo el marketing digital impulsa el Éxito
          Empresarial
        </h3>
        <p>
          El marketing digital ha cambiado la manera en que las empresas en Perú
          alcanzan sus metas y se hacen notar desde inclusive antes de la
          pandemia. A continuación, te presentamos dos ejemplos de cómo el
          marketing digital ha ayudado a empresas a destacar y crecer:
        </p>
        <div className={styles.inkafarma}>
          <div>
            <h4>1. Inkafarma</h4>
            <p>
              En el 2022, la cadena de farmacias Inkafarma lanzó una campaña con
              la participación de la Dra. Ana María Polo, famosa por su programa
              &quot;Caso Cerrado&quot;. La campaña, llamada &quot;El caso de los
              precios más bajos&quot;, logró un gran impacto:
            </p>
          </div>
          <img
            className={styles.imagenInkafarma}
            src="/images/image_3.svg"
            alt=""
          />
        </div>
        <div className={styles.benefitsTransformYourBusiness}>
          <ul>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Medios de Comunicación: La campaña recibió mucha cobertura en
              noticias, usando la figura de la Dra. Polo para destacar el
              mensaje de precios bajos.
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Redes Sociales: Utilizaron estrategias específicas para cada red
              social, desde TikTok hasta YouTube, manteniendo la campaña
              interesante y generando una alta participación de los
              consumidores.
            </li>
          </ul>
        </div>
        <div className={styles.McDonalds}>
          <img
            className={styles.imagenMacdonalds}
            src="/images/imagen_4.svg"
            alt=""
          />
          <div className={styles.text}>
            <h4>2. McDonald’s</h4>
            <p>
              En 2022, la campaña &quot;Yo amo ayudar&quot; de McDonald’s
              demuestra cómo el marketing digital puede potenciar una marca y
              apoyar una causa benéfica.
            </p>
          </div>
        </div>
        <div className={styles.benefitsTransformYourBusiness}>
          <ul>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Campaña Solidaria en Redes Sociales:Se donó el 100% de las ventas
              de la hamburguesa Big Mac a dos organizaciones benéficas en Perú:
              Aldeas Infantiles SOS y la Asociación Casa Ronald McDonald.
              Promocionaron esta campaña en redes sociales para atraer la
              atención del público y animar a los clientes a participar en esta
              noble causa.
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Publicidad en Medios: Utilizaron una amplia cobertura en medios de
              comunicación para destacar la campaña y llegar a más personas.
              Esta estrategia ayudó a que el mensaje de la campaña se difundiera
              ampliamente y atrajo más clientes a las tiendas.
            </li>
            <li>
              <img src="/images/Ellipse.svg" alt="" />
              Incentivo a la Participación: La donación del 100% de las ventas
              de un producto popular como la Big Mac incentivó a los clientes a
              apoyar la causa simplemente al comprar su hamburguesa favorita.
              Esto no solo aumentó las ventas, sino que también mostró el
              compromiso de McDonald’s con la comunidad.
            </li>
          </ul>
        </div>
        <p>
          Estos ejemplos muestran cómo el marketing digital puede ser una
          herramienta poderosa para las empresas en Perú. Ayuda a conectar con
          el público y a lograr resultados impresionantes. Si estás buscando una
          manera de hacer crecer tu negocio y destacar en el mercado, el
          marketing digital puede ser la clave. ¡Contáctanos para saber cómo
          podemos ayudarte!
        </p>
        <div>
          <h4>Fuentes:</h4>
          <div className={styles.benefitsTransformYourBusinessRoute}>
            <ul>
              <li>
                <img src="/images/Ellipse.svg" alt="" />
                HubSpot. (2023). ¿Qué es el marketing digital?
                <a
                  href="https://blog.hubspot.es/marketing/que-es-marketing-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://blog.hubspot.es/marketing/que-es-marketing-digital
                </a>
              </li>
              <li>
                <img src="/images/Ellipse.svg" alt="" />
                IEBSchool. (2024). ¿Qué es el marketing digital?
                <a
                  href="https://www.iebschool.com/blog/que-es-marketing-digital-marketing-digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.iebschool.com/blog/que-es-marketing-digital-marketing-digital/
                </a>
              </li>
              <li>
                <img src="/images/Ellipse.svg" alt="" />
                Mercado Negro. (2022). Inkafarma: El precio es un atributo con
                el que la marca se ha posicionado a través de los años.
                <a
                  href="https://www.mercadonegro.pe/actualidad/inkafarma-el-precio-es-un-atributo-con-el-que-la-marca-se-ha-posicionado-a-traves-de-los-anos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.mercadonegro.pe/actualidad/inkafarma-el-precio-es-un-atributo-con-el-que-la-marca-se-ha-posicionado-a-traves-de-los-anos/
                </a>
              </li>
              <li>
                <img src="/images/Ellipse.svg" alt="" />
                Trome. (2022). McDonald’s: Hamburguesas en campaña solidaria,
                gran día donará 100% de ventas de hamburguesa Big Mac a favor de
                niños y adolescentes de Aldeas Infantiles SOS Perú y Asociación
                Casa Ronald McDonald.
                <a
                  href="https://trome.com/actualidad/mcdonalds-hamburguesas-campana-solidaria-gran-dia-donara-100-de-ventas-de-hamburguesa-big-mac-a-favor-de-ninos-y-adolescentes-de-aldeas-infantiles-sos-peru-y-asociacion-casa-ronald-mcdonald-imp-noticia/?ref=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://trome.com/actualidad/mcdonalds-hamburguesas-campana-solidaria-gran-dia-donara-100-de-ventas-de-hamburguesa-big-mac-a-favor-de-ninos-y-adolescentes-de-aldeas-infantiles-sos-peru-y-asociacion-casa-ronald-mcdonald-imp-noticia/?ref=tr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.contentTwoTransformYourBusiness}>
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
