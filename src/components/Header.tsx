import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  // Detectar seção ativa durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => {
    return activeSection === section;
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo e Título */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="header-brand"
        >
          <div className="header-logo">
            <img src="/icon.png" alt="Projeto Saúde" className="header-logo-img" />
          </div>
          <div className="header-brand-text">
            <h1 className="header-title">Projeto Saúde</h1>
            <span className="header-subtitle">Fitness & Bem-estar</span>
          </div>
        </button>

        {/* Navegação Desktop */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('home')}
                className={`nav-link ${isActive('home') ? 'active' : ''}`}
              >
                Início
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('about')}
                className={`nav-link ${isActive('about') ? 'active' : ''}`}
              >
                Sobre
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('services')}
                className={`nav-link ${isActive('services') ? 'active' : ''}`}
              >
                Treinos
              </button>
            </li>
            <li className="nav-item">
              <button 
                onClick={() => scrollToSection('contact')}
                className={`nav-link ${isActive('contact') ? 'active' : ''}`}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>

        {/* Botões de Ação */}
        <div className="header-actions">
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn btn-primary"
          >
            Começar Agora
          </button>
        </div>

        {/* Menu Mobile */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu Mobile Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <button 
                onClick={() => scrollToSection('home')}
                className={`mobile-nav-link ${isActive('home') ? 'active' : ''}`}
              >
                <span className="mobile-nav-icon home-icon"></span>
                <span>Início</span>
                {isActive('home') && <span className="mobile-nav-active-indicator"></span>}
              </button>
            </li>
            <li className="mobile-nav-item">
              <button 
                onClick={() => scrollToSection('about')}
                className={`mobile-nav-link ${isActive('about') ? 'active' : ''}`}
              >
                <span className="mobile-nav-icon about-icon"></span>
                <span>Sobre</span>
                {isActive('about') && <span className="mobile-nav-active-indicator"></span>}
              </button>
            </li>
            <li className="mobile-nav-item">
              <button 
                onClick={() => scrollToSection('services')}
                className={`mobile-nav-link ${isActive('services') ? 'active' : ''}`}
              >
                <span className="mobile-nav-icon services-icon"></span>
                <span>Treinos</span>
                {isActive('services') && <span className="mobile-nav-active-indicator"></span>}
              </button>
            </li>
            <li className="mobile-nav-item">
              <button 
                onClick={() => scrollToSection('contact')}
                className={`mobile-nav-link ${isActive('contact') ? 'active' : ''}`}
              >
                <span className="mobile-nav-icon contact-icon"></span>
                <span>Contato</span>
                {isActive('contact') && <span className="mobile-nav-active-indicator"></span>}
              </button>
            </li>
          </ul>
          
          <div className="mobile-actions">
            <button className="btn btn-outline mobile-btn" onClick={closeMenu}>
              Login
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary mobile-btn"
            >
              Começar Agora
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay para fechar menu */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;