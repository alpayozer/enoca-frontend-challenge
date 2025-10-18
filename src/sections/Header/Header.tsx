import React, { useState } from "react";
import { ThemeToggle } from "../../components/ThemeToggle/ThemeToggle";
import "./Header.scss";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Alpay Özer</div>

        <nav
          className={`header__nav ${
            isMobileMenuOpen ? "header__nav--open" : ""
          }`}
        >
          <a href="#features" onClick={handleLinkClick}>
            Özellikler
          </a>
          <a href="#pricing" onClick={handleLinkClick}>
            Fiyatlar
          </a>
          <a href="#faq" onClick={handleLinkClick}>
            SSS
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            İletişim
          </a>
        </nav>

        <div className="header__controls">
          <ThemeToggle />

          <button
            className="header__hamburger"
            onClick={toggleMobileMenu}
            aria-label="Menüyü aç/kapat"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
