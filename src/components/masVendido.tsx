import "./masVendido.css";

export default function MasVendido() {
  return (
    <section className="mas-vendido">
      <h2 className="titulo">Lo más vendido</h2>
      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <div className="imagen">
            <img src="/images/masVendido1.avif" alt="Platillo 1" />
          </div>
          <div className="descripcion">Descripción del producto</div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="imagen">
            <img src="/images/masVendido2.avif" alt="Platillo 2" />
          </div>
          <div className="descripcion">Descripción del producto</div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="imagen">
            <img src="/images/masVendido3.avif" alt="Platillo 3" />
          </div>
          <div className="descripcion">Descripción del producto</div>
        </div>


        
      </div>
    </section>
  );
}
