import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";
export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#DBF79F",
        padding: "20px",
      }}
    >
      <Link to="/">Mi Tienda</Link>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
        }}
      >
        <Link to="/category/laptopsycomputadoras">Laptops y Computadoras</Link>
        <Link to="/category/accesorioscomputacion">Accesorios de Computación</Link>
      </ul>
      {/* <a href="/cart">Carrito</a> */}
      <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
        <CartWidget />
      </Link>
    </nav>
  );
};
