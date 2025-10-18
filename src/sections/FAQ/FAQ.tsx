import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import "./FAQ.scss";

const faqData = [
  {
    title: "Ürünü satın aldıktan sonra iade edebilir miyim?",
    content:
      "Elbette! Ürünümüzden memnun kalmazsanız, satın alımdan sonraki 30 gün içinde koşulsuz iade garantisi sunuyoruz. Müşteri hizmetlerimizle iletişime geçmeniz yeterlidir.",
  },
  {
    title: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    content:
      "Tüm yaygın kredi kartlarını (Visa, MasterCard, American Express) ve ayrıca PayPal ile banka havalesini kabul ediyoruz. Tüm işlemler güvenli altyapı üzerinden gerçekleştirilir.",
  },
  {
    title: "Teknik destek sunuyor musunuz?",
    content:
      "Evet, tüm planlarımızda 7/24 e-posta desteği bulunmaktadır. Pro ve Kurumsal plan abonelerimiz ayrıca özel telefon desteğinden de faydalanabilirler.",
  },
  {
    title: "Ürünü kullanmaya başlamak için neye ihtiyacım var?",
    content:
      "Başlamak çok kolay! Sadece bir hesap oluşturmanız ve kurulum sihirbazını takip etmeniz yeterli. Herhangi bir teknik bilgiye veya ek yazılıma ihtiyacınız bulunmamaktadır.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="faq container">
      <h2 className="section-title">Sıkça Sorulan Sorular</h2>

      <div className="faq__list">
        {faqData.map((item, index) => (
          <Accordion key={index} title={item.title}>
            <p>{item.content}</p>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
