import './../styles/error-page.css';

export const ErrorPage = () => {
  return (
    <div className="custom-body-class">
      <section id="not-found">
        <div className="circles">
          <p>404<br />
            <small>Página no encontrada</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </div>

  )
}
