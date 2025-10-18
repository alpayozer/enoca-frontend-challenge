import React, { useState, useRef, useId } from "react";
import "./Accordion.scss";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean; // İsteğe bağlı, varsayılan açık mı?
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // İçerik alanının yüksekliğini dinamik olarak almak için
  const contentRef = useRef<HTMLDivElement>(null);

  // Erişilebilirlik için benzersiz ID'ler oluşturma
  const panelId = useId();
  const headerId = useId();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // İçerik yüksekliğini ayarla
  const contentStyle = {
    // 'isOpen' true ise 'scrollHeight' (içeriğin gerçek yüksekliği)
    // false ise 0 olarak ayarla.
    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
  };

  return (
    <div className={`accordion ${isOpen ? "accordion--open" : ""}`}>
      <h3>
        <button
          id={headerId}
          className="accordion__header"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={panelId} // Hangi paneli kontrol ettiğini belirtir
        >
          <span className="accordion__title">{title}</span>
          <span className="accordion__icon" aria-hidden="true"></span>
        </button>
      </h3>
      <div
        id={panelId}
        ref={contentRef}
        className="accordion__content-wrapper"
        style={contentStyle}
        role="region" // Bu alanın bir bölge olduğunu belirtir
        aria-labelledby={headerId} // Hangi başlığa ait olduğunu belirtir
        hidden={!isOpen} // Ekran okuyucular için
      >
        <div className="accordion__content-inner">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
