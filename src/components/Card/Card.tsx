import React from "react";
import "./Card.scss";

type CardProps = {
  title: string;
  price: string;
  priceDescription?: string;
  features: string[];
  // Önceki adımda yaptığımız Button bileşenini buraya prop olarak geçireceğiz
  cta: React.ReactNode;
  isFeatured?: boolean; // Fiyat kartını öne çıkarmak için
};

const Card: React.FC<CardProps> = ({
  title,
  price,
  priceDescription,
  features,
  cta,
  isFeatured = false,
}) => {
  // BEM modifier kullanarak öne çıkan kartı belirliyoruz
  const className = `card ${isFeatured ? "card--featured" : ""}`;

  return (
    <div className={className}>
      {isFeatured && <div className="card__badge">Popüler</div>}

      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <div className="card__price">{price}</div>
        {priceDescription && (
          <div className="card__price-desc">{priceDescription}</div>
        )}
      </div>

      <ul className="card__features">
        {features.map((feature, index) => (
          <li key={index} className="card__feature-item">
            {feature}
          </li>
        ))}
      </ul>

      <div className="card__cta">{cta}</div>
    </div>
  );
};

export default Card;
