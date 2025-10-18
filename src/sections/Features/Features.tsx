import React from "react";
import "./Features.scss";

const featureData = [
  {
    icon: "⚡",
    title: "Işık Hızında",
    description:
      "En modern teknolojilerle optimize edilmiş altyapı sayesinde anında yüklenme.",
  },
  {
    icon: "📱",
    title: "Tam Duyarlı Tasarım",
    description:
      "Mobil öncelikli yaklaşımla  geliştirildi, her ekranda mükemmel görünür.",
  },
  {
    icon: "🎨",
    title: "Yeniden Kullanılabilir",
    description:
      "Oluşturduğumuz bileşen kütüphanesi  ile tutarlı ve hızlı geliştirme.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="features container">
      <h2 className="section-title">Ürün Özellikleri</h2>

      <div className="features__grid">
        {featureData.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-item__icon">{feature.icon}</div>
            <h3 className="feature-item__title">{feature.title}</h3>
            <p className="feature-item__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
