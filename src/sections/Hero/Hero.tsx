import React from "react";
import Button from "../../components/Button/Button";
import "./Hero.scss";
import heroImage from "../../assets/enoca-frontend-challenge.png";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Enoca Frontend Challenge</h1>
        <p className="hero__subtitle">
          Bu proje Enoca Frontend Challenge kapsamında hazırlanmıştır.
        </p>
        <div className="hero__cta">
          <Button
            variant="primary"
            onClick={() => console.log("Hero CTA Tıklandı!")}
          >
            Hemen Başla
          </Button>
          <Button
            variant="ghost"
            onClick={() => console.log("Hero İkincil Tıklandı!")}
          >
            Daha Fazla Bilgi
          </Button>
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image-placeholder">
          {/* 2. <img> etiketini buraya ekleyin */}
          <img
            src={heroImage}
            alt="Enoca Frontend Challenge Görseli"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
