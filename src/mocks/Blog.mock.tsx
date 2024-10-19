import CreateYourSuccess from "@/Components/Features/Blog/CreateYourSuccess";
import EnhanceYourPresence from "@/Components/Features/Blog/EnhanceYourPresence";
import TransformYourBusiness from "@/Components/Features/Blog/TransformYourBusiness/inde";
import { BlogType } from "@/types/entities/BlogType";

export const BlogList: BlogType[] = [
  {
    idBlog: 1,
    title: "Transforma tu negocio con el poder del marketing digital",
    paragraph:
      "¿Conoces qué es el marketing digital? O acaso ¿Quieres conocer más del marketing digital? ¡Este blog es para ti!",
    publishedDate: "19-10-2022",
    image: "/images/image_1.svg",
    componente: <TransformYourBusiness />,
  },
  {
    idBlog: 2,
    title:
      "Potencia tu Presencia Digital: 7 Pasos Clave para Pequeñas Empresas",
    paragraph:
      "En el mundo actual, si tu negocio no está en línea, ¡es como si no existiera! Pero sabemos que dar el salto al marketing digital puede ser todo un reto, especialmente para las pequeñas empresas.",
    publishedDate: "19-10-2023",
    image: "/images/imagen_5.svg",
    componente: <EnhanceYourPresence />,
  },
  {
    idBlog: 3,
    title:
      "Crea tu Éxito Online: Guía Paso a Paso para un Plan de Marketing Digital Efectivo",
    paragraph:
      "En la era digital, tener un plan de marketing bien definido es esencial para cualquier empresa que busque alcanzar sus objetivos y conectar de manera efectiva con sus clientes. ",
    publishedDate: "19-10-2023",
    image: "/images/imagen_6.svg",
    componente: <CreateYourSuccess />,
  },
];
