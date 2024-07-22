import { useEffect } from 'react';
import styles from './../styles/error-page.module.css';

export const ErrorPage = () => {
  useEffect(
    () => {
      //Guardar el estilo original del body
      const originalBodyStyle = document.body.className;
      // Aplicar el estilo de la página de error
      document.body.className = `${styles.errorPageBody}`;
      // Restaurar el estilo original del body al cierre de la página
      return () => {
        document.body.className = originalBodyStyle;
      };
    }, []); //Arreglo de dependencias vacío, significa que sólo se ejecuta una vez

  return (
    <div className={styles.customBodyClass}>
      <section id="not-found">
        <div className={styles.circles}>
          <p>404<br />
            <small>Página no encontrada</small>
          </p>
          <span className={`${styles.circle} ${styles.big}`}></span>
          <span className={`${styles.circle} ${styles.med}`}></span>
          <span className={`${styles.circle} ${styles.small}`}></span>
        </div>
      </section>
    </div>

  )
}
