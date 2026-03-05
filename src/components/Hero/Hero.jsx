import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Salom, Mening ismim Sanjarbek </h1>
        <p>Frontend Developer | React | Zamonaviy UI yaratuvchisi</p>
        <button onClick={() => window.location.href="#contact"}>
          Men bilan bog'lanish.
        </button>
      </div>
    </section>
  );
}

export default Hero;
