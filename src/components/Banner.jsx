import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">

      <div className="overlay">

        <img
          src="/logo.png"
          alt="YFL"
          className="banner-logo"
        />

        <h1>YFL Tienda Tecnológica</h1>

        <p>Tecnología • Innovación • Calidad</p>

        <button>Ver productos</button>

      </div>

    </section>
  );
};

export default Banner;
