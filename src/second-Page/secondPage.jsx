import "bootstrap/dist/css/bootstrap.min.css";
import m1 from "../mountain_1.jpg";
import m2 from "../mountain_2.jpg";
import m3 from "../mountain_3.jpg";
import "bootstrap";
import "./style.css";

const SecondPage = () => {
  return (
    <div
      className="carousel slide"
      id="carouselDemo"
      data-bs-wrap="true"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={m1} alt="Mountain one" className="w-100" />
        </div>

        <div className="carousel-item " data-bs-interval="2000">
          <img src={m2} alt="Mountain two" className="w-100" />
        </div>

        <div className="carousel-item ">
          <img src={m3} alt="Mountain three" className="w-100" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselDemo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselDemo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

      <div className="carousel-indicators">
        <button
          type="button"
          className="active"
          data-bs-target="#carouselDemo"
          data-bs-slide-to="0"
        >
          <img src={m1} alt="Mountain one" />
        </button>

        <button
          type="button"
          data-bs-target="#carouselDemo"
          data-bs-slide-to="1"
        >
          <img src={m2} alt="Mountain two" />
        </button>

        <button
          type="button"
          data-bs-target="#carouselDemo"
          data-bs-slide-to="2"
        >
          <img src={m3} alt="Mountain three" />
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
