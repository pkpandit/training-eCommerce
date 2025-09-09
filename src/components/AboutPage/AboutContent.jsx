import React from "react";
import {
  BsBullseye,
  BsClipboardData,
  BsInfoCircle,
  BsPersonCheck,
} from "react-icons/bs";
const AboutContent = () => {
  return (
    <section id="about-2" className="about-2 section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <span className="section-badge">
          <BsInfoCircle />
          About Us
        </span>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="about-title">
              Nemo enim ipsam voluptatem quia voluptas aspernatur
            </h2>
            <p className="about-description">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae.
            </p>
          </div>
          <div className="col-lg-6">
            <p className="about-text">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat.
            </p>
            <p className="about-text">
              Amet eos ut. Officiis soluta ab id dolor non sint. Corporis omnis
              consequatur quisquam ex consequuntur quo omnis. Quo eligendi cum.
              Amet mollitia qui quidem dolores praesentium quasi ut et.
            </p>
          </div>
        </div>

        <div className="row features-boxes gy-4 mt-3">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="icon-box">
                <BsBullseye />
              </div>
              <h3>
                <a href="#" className="stretched-link">
                  At vero eos
                </a>
              </h3>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="icon-box">
                <BsPersonCheck />
              </div>
              <h3>
                <a href="#" className="stretched-link">
                  Sed ut perspiciatis
                </a>
              </h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </p>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="icon-box">
                <BsClipboardData />
              </div>
              <h3>
                <a href="#" className="stretched-link">
                  Nemo enim ipsam
                </a>
              </h3>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12" data-aos="zoom-in" data-aos-delay="200">
            <div className="video-box">
              <img
                src="./img/about/about-wide-1.webp"
                className="img-fluid"
                alt="Video Thumbnail"
              />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox pulsating-play-btn"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
