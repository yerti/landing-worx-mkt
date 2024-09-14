import '../app/globals.css'
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      // Configuración global
      disable: false, // Puedes usar 'phone', 'tablet', 'mobile', o una función para desactivar en ciertos dispositivos
      startEvent: 'DOMContentLoaded', // Evento en el que AOS debería inicializarse
      initClassName: 'aos-init', // Clase aplicada después de la inicialización
      animatedClassName: 'aos-animate', // Clase aplicada durante la animación
      useClassNames: false, // Si se debe usar contenido de `data-aos` como clases
      disableMutationObserver: false, // Desactiva el observador de mutaciones
      debounceDelay: 50, // Retardo en debounce al redimensionar la ventana
      throttleDelay: 99, // Retardo en throttle al desplazar la página

      // Configuración que se puede sobrescribir por elemento con atributos `data-aos-*`
      offset: 120, // Desplazamiento desde el punto de activación
      delay: 0, // Retraso antes de comenzar la animación
      duration: 400, // Duración de la animación
      easing: 'ease', // Tipo de easing para las animaciones
      once: false, // Si la animación debe suceder solo una vez
      mirror: false, // Si los elementos deben animarse al pasar por ellos
      anchorPlacement: 'top-bottom', // Posición del elemento que activará la animación
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
