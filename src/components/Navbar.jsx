import "./Navbar.css";
import {
  FaSearch,
  FaUser,
  FaShoppingCart
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        🚚 Envío gratis en compras superiores a $1000
      </div>

      <nav className="navbar">

        
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="YFL Logo"
            className="logo-img"
          />
          <h2>YFL Store</h2>
        </div>

      
        <ul className="menu">

          <li>
            <a href="#">Inicio</a>
          </li>

          <li>
            <button type="button" className="nav-btn">
              Productos
            </button>
          </li>

          <li>
            <button type="button" className="nav-btn">
              Servicios
            </button>
          </li>

          <li>
            <button type="button" className="nav-btn">
              Contacto
            </button>
          </li>

        </ul>

        
        <div className="icons">

          <button type="button" className="icon-btn">
            <FaSearch />
          </button>

          <button type="button" className="icon-btn">
            <FaUser />
          </button>

          <button type="button" className="icon-btn">
            <FaShoppingCart />
          </button>

        </div>

      </nav>
    </>
  );
};

export default Navbar;
