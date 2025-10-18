import React, { useState, useRef, useId, useEffect } from "react";
import "./Accordion.scss";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const headerId = useId();

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const height = `${contentRef.current.scrollHeight}px`;
        setContentHeight(height);
      } else {
        setContentHeight("0px");
      }
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "accordion--open" : ""}`}>
      <h3>
        <button
          id={headerId}
          className="accordion__header"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="accordion__title">{title}</span>
          <span className="accordion__icon" aria-hidden="true"></span>
        </button>
      </h3>

      <div
        id={panelId}
        ref={contentRef}
        className="accordion__content-wrapper"
        style={{ maxHeight: contentHeight }}
        role="region"
        aria-labelledby={headerId}
        hidden={!isOpen}
      >
        <div className="accordion__content-inner">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
