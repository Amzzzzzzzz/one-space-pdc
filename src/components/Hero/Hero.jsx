import "./Hero.css";
import hero from "../../assets/images/Office.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), url(${hero})`,
      }}
    >
      <div className="heroContent">

        <h1>
          Designing Spaces with Purpose.
        </h1>

        <h2>
          Planning for Performance. Building Better Environments.
        </h2>

        <p className="description">
          We transform commercial, healthcare, educational and residential
          spaces into environments that improve efficiency, functionality
          and long-term performance.
        </p>

        <div className="heroButtons">

<button
  onClick={() =>
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    })
  }
>
  Request Consultation
</button>

                <button
                className="outline"
                onClick={() =>
                    document.getElementById("services").scrollIntoView({
                    behavior: "smooth",
                    })
                }
                >
                View Services
                </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;