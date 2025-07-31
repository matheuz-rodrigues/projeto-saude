import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção Principal */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/icon.png" alt="Projeto Saúde" className="footer-logo-img" />
            </div>
            <div className="footer-brand-content">
              <h3 className="footer-title">Projeto Saúde</h3>
              <p className="footer-description">
                Transformando vidas através da atividade física e bem-estar. 
                Seu parceiro na jornada para uma vida mais saudável e ativa.
              </p>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Navegação</h4>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <button onClick={() => scrollToSection('home')} className="footer-nav-link">
                  Início
                </button>
              </li>
              <li className="footer-nav-item">
                <button onClick={() => scrollToSection('about')} className="footer-nav-link">
                  Sobre
                </button>
              </li>
              <li className="footer-nav-item">
                <button onClick={() => scrollToSection('services')} className="footer-nav-link">
                  Treinos
                </button>
              </li>
              <li className="footer-nav-item">
                <button onClick={() => scrollToSection('contact')} className="footer-nav-link">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Treinos e Serviços */}
          <div className="footer-services">
            <h4 className="footer-nav-title">Serviços</h4>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <span className="footer-nav-link">Personal Training</span>
              </li>
              <li className="footer-nav-item">
                <span className="footer-nav-link">Treinos em Grupo</span>
              </li>
              <li className="footer-nav-item">
                <span className="footer-nav-link">Consultoria Nutricional</span>
              </li>
              <li className="footer-nav-item">
                <span className="footer-nav-link">Avaliação Física</span>
              </li>
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div className="footer-contact">
            <h4 className="footer-nav-title">Contato</h4>
            <div className="footer-contact-info">
              <p className="footer-contact-item">
                <span className="contact-icon email-icon"></span>
                contato@projetosaude.com
              </p>
              <p className="footer-contact-item">
                <span className="contact-icon phone-icon"></span>
                (11) 99999-9999
              </p>
              <p className="footer-contact-item">
                <span className="contact-icon location-icon"></span>
                São Paulo, Brasil
              </p>
            </div>

            {/* Redes Sociais */}
            <div className="footer-social">
              <h5 className="footer-social-title">Redes Sociais</h5>
              <div className="footer-social-links">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link whatsapp"
                  aria-label="WhatsApp"
                >
                  <span className="social-icon whatsapp-icon"></span>
                  <span className="social-text">WhatsApp</span>
                </a>
                <a 
                  href="https://linkedin.com/in/matheus-rodrigues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link linkedin"
                  aria-label="LinkedIn"
                >
                  <span className="social-icon linkedin-icon"></span>
                  <span className="social-text">LinkedIn</span>
                </a>
                <a 
                  href="mailto:contato@projetosaude.com"
                  className="footer-social-link email"
                  aria-label="Email"
                >
                  <span className="social-icon email-social-icon"></span>
                  <span className="social-text">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <h3 className="footer-cta-title">Pronto para começar?</h3>
            <p className="footer-cta-description">
              Transforme sua vida hoje mesmo. Comece sua jornada fitness conosco!
            </p>
          </div>
          <div className="footer-cta-actions">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary footer-cta-btn"
            >
              Começar Agora
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="btn btn-outline footer-cta-btn"
            >
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="footer-divider"></div>

        {/* Copyright e Créditos */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">
              © {currentYear} Projeto Saúde. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="footer-credits">
            <p className="credits-text">
              Desenvolvido com 
              <span className="heart-icon"></span> 
              por 
              <span className="developer-name">Matheus Rodrigues</span>
            </p>
          </div>

          <div className="footer-links">
            <a href="#" className="footer-link">Política de Privacidade</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-link">Termos de Uso</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-link">Cookies</a>
          </div>
        </div>

        {/* Botão Voltar ao Topo */}
        <button 
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Voltar ao topo"
        >
          <span className="back-to-top-icon"></span>
        </button>
      </div>

      {/* Background Pattern */}
      <div className="footer-pattern"></div>
    </footer>
  );
};

export default Footer;