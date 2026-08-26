import Header from "./components/header";
import Carrusel from "./components/carrusel";
import TextoScroll from "./components/textoScroll";
import MasVendido from "./components/masVendido";
import Menu1 from "./components/menu1";
import MenuProductos from "./components/menuProductos";
import Promociones from "./components/promociones";
import Mapa from "./components/mapa";
import Footer from "./components/footer";



function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Carrusel />
        <TextoScroll />
        <MasVendido />
        <h2 id="menu" className="menu-titulo">Menú</h2>
        <Menu1 />
        <MenuProductos />
        <Promociones />
        <Mapa />
      </main>
      <Footer />
    </div>
  );
}

export default App;
