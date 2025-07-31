import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        {/* Seção Home/Hero */}
        <section id="home" className="section hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Transforme sua vida com 
                  <span className="text-gradient"> atividade física</span>
                </h1>
                <p className="hero-description">
                  Descubra o poder da mudança através do movimento. 
                  Nossos programas personalizados vão te ajudar a alcançar 
                  seus objetivos de saúde e bem-estar.
                </p>
                <div className="hero-actions">
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Começar Agora
                  </button>
                  <button 
                    className="btn btn-outline btn-lg"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Saiba Mais
                  </button>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Alunos transformados</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Anos de experiência</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Taxa de satisfação</span>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <div className="hero-image-container">
                  <img 
                    src="/icon.png" 
                    alt="Projeto Saúde - Atividade Física" 
                    className="hero-img"
                  />
                  <div className="hero-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Sobre */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Sobre o Projeto Saúde</h2>
              <p className="section-subtitle">
                Conheça nossa história e nossa missão de transformar vidas
              </p>
            </div>
            
            <div className="about-content">
              <div className="about-text">
                <h3 className="about-subtitle">Nossa Missão</h3>
                <p className="about-description">
                  Acreditamos que a atividade física é a chave para uma vida plena e saudável. 
                  Nosso objetivo é democratizar o acesso a treinos de qualidade, oferecendo 
                  programas personalizados que se adaptam ao seu estilo de vida.
                </p>
                
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">💪</div>
                    <h4 className="feature-title">Treinos Personalizados</h4>
                    <p className="feature-description">
                      Programas adaptados às suas necessidades e objetivos específicos.
                    </p>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h4 className="feature-title">Resultados Comprovados</h4>
                    <p className="feature-description">
                      Metodologia testada com mais de 500 alunos transformados.
                    </p>
                  </div>
                  
                  <div className="feature-card">
                    <div className="feature-icon">🏆</div>
                    <h4 className="feature-title">Acompanhamento Profissional</h4>
                    <p className="feature-description">
                      Suporte contínuo de profissionais qualificados em educação física.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Serviços/Treinos */}
        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Nossos Treinos</h2>
              <p className="section-subtitle">
                Encontre o programa perfeito para seus objetivos
              </p>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🏋️‍♀️</div>
                <h3 className="service-title">Personal Training</h3>
                <p className="service-description">
                  Treinos individualizados com acompanhamento personalizado 
                  para máximos resultados.
                </p>
                <ul className="service-features">
                  <li>Avaliação física completa</li>
                  <li>Programa personalizado</li>
                  <li>Acompanhamento semanal</li>
                  <li>Suporte nutricional</li>
                </ul>
                <button className="btn btn-outline service-btn">
                  Saiba Mais
                </button>
              </div>
              
              <div className="service-card featured">
                <div className="service-badge">Mais Popular</div>
                <div className="service-icon">👥</div>
                <h3 className="service-title">Treinos em Grupo</h3>
                <p className="service-description">
                  Exercite-se em grupo e encontre motivação com outros alunos 
                  que compartilham seus objetivos.
                </p>
                <ul className="service-features">
                  <li>Turmas reduzidas</li>
                  <li>Horários flexíveis</li>
                  <li>Ambiente motivador</li>
                  <li>Custo-benefício</li>
                </ul>
                <button 
                  className="btn btn-primary service-btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar Agora
                </button>
              </div>
              
              <div className="service-card">
                <div className="service-icon">🥗</div>
                <h3 className="service-title">Consultoria Nutricional</h3>
                <p className="service-description">
                  Orientação alimentar especializada para potencializar 
                  seus resultados nos treinos.
                </p>
                <ul className="service-features">
                  <li>Plano alimentar personalizado</li>
                  <li>Receitas práticas</li>
                  <li>Acompanhamento mensal</li>
                  <li>Reeducação alimentar</li>
                </ul>
                <button className="btn btn-outline service-btn">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Contato */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Entre em Contato</h2>
              <p className="section-subtitle">
                Pronto para começar sua transformação? Fale conosco!
              </p>
            </div>
            
            <div className="contact-content">
              <div className="contact-info">
                <h3 className="contact-subtitle">Vamos conversar</h3>
                <p className="contact-description">
                  Estamos aqui para ajudar você a dar o primeiro passo 
                  em direção a uma vida mais saudável e ativa.
                </p>
                
                <div className="contact-methods">
                  <a href="tel:11999999999" className="contact-method">
                    <div className="contact-method-icon phone-icon"></div>
                    <div className="contact-method-content">
                      <h4 className="contact-method-title">Telefone</h4>
                      <p className="contact-method-text">(11) 99999-9999</p>
                    </div>
                  </a>
                  
                  <a href="mailto:contato@projetosaude.com" className="contact-method">
                    <div className="contact-method-icon email-icon"></div>
                    <div className="contact-method-content">
                      <h4 className="contact-method-title">Email</h4>
                      <p className="contact-method-text">contato@projetosaude.com</p>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <div className="contact-method-icon whatsapp-icon"></div>
                    <div className="contact-method-content">
                      <h4 className="contact-method-title">WhatsApp</h4>
                      <p className="contact-method-text">Resposta rápida</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Formulário enviado! (Implementar envio real)');
                }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Nome</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="form-input" 
                        placeholder="Seu nome completo"
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="form-input" 
                        placeholder="seu.email@exemplo.com"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="form-input" 
                      placeholder="(11) 99999-9999"
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="objective" className="form-label">Objetivo</label>
                    <select id="objective" className="form-select" required>
                      <option value="">Selecione seu objetivo</option>
                      <option value="emagrecimento">Emagrecimento</option>
                      <option value="ganho-massa">Ganho de massa muscular</option>
                      <option value="condicionamento">Condicionamento físico</option>
                      <option value="reabilitacao">Reabilitação</option>
                      <option value="bem-estar">Bem-estar geral</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Mensagem</label>
                    <textarea 
                      id="message" 
                      className="form-textarea" 
                      rows={4}
                      placeholder="Conte-nos mais sobre seus objetivos e expectativas..."
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg form-submit">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>  
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;