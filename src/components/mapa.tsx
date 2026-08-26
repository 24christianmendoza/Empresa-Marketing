import "./mapa.css";

export default function Mapa() {
  return (
    <section className="mapa">
      <h2 id="ubicaciones"className="mapa-titulo">Ubicación</h2>
      <div className="mapa-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1249471997694!2d-100.37723362393272!3d25.76643620840822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866291351b68f52f%3A0x159b63617473cf53!2sOboe%20263%2C%20San%20Bernab%C3%A9%20IX%20Sector%2C%2064105%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1787614072106!5m2!1ses-419!2smx"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Ubicación del local"
        ></iframe>
      </div>

      {/* Bloque de información */}
      <div className="mapa-info">
        <div className="mapa-col izquierda">
          <p>Oboe 263, San Bernabé IX Sector, Monterrey, N.L.</p>
          <h4>Horario</h4>
          <p>Lunes a Sábado: 9 AM – 8 PM</p>
          <p>Domingo: 10 AM – 6 PM</p>
          <h4>Envío a domicilio en área metropolitana</h4>
          
        </div>

        
        <div className="mapa-col derecha">
          

          {/* Dinámica debajo */}
          <div className="mapa-dinamica">
            <p>Envío a Domicilio</p>
            <p>Tel. 81 8000 0000</p>
          </div>
        </div>

        <div className="mapa-col derecha">
          

          {/* Dinámica debajo */}
          <div className="mapa-dinamica">
            <p>Dinámica</p>
            <p>Preguntar en caja</p>
          </div>
        </div>
      </div>
    </section>
  );
}
