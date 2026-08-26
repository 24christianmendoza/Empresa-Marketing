import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Tío Ben</div>
      <nav className="navbar">
        <ul>
          <li><a href="#menu">Menú</a></li>
          <li><a href="#promociones">Promociones</a></li>
          <li><a href="#mapa">Mapa</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
