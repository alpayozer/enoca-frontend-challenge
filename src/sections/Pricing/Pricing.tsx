import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./Pricing.scss";

const pricingData = [
  {
    title: "Temel Plan",
    price: "₺99",
    priceDescription: "/ay",
    features: ["10 Ürün", "Temel Destek", "Haftalık Raporlar"],
    cta: (
      <Button variant="secondary" onClick={() => alert("Temel Plan Seçildi")}>
        Planı Seç
      </Button>
    ),
    isFeatured: false,
  },
  {
    title: "Pro Plan",
    price: "₺199",
    priceDescription: "/ay",
    features: [
      "Sınırsız Ürün",
      "Öncelikli Destek",
      "Günlük Raporlar",
      "API Erişimi",
    ],
    cta: (
      <Button variant="primary" onClick={() => alert("Pro Plan Seçildi")}>
        Hemen Başla
      </Button>
    ),
    isFeatured: true,
  },
  {
    title: "Kurumsal",
    price: "Özel",
    priceDescription: "Teklif Alın",
    features: ["Tüm Pro Özellikleri", "Özel Entegrasyon", "7/24 Destek Hattı"],
    cta: (
      <Button variant="ghost" onClick={() => alert("Teklif İsteniyor")}>
        İletişime Geç
      </Button>
    ),
    isFeatured: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing container">
      <h2 className="section-title">Size Uygun Planı Seçin</h2>

      <div className="pricing__grid">
        {pricingData.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            price={plan.price}
            priceDescription={plan.priceDescription}
            features={plan.features}
            cta={plan.cta}
            isFeatured={plan.isFeatured}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
