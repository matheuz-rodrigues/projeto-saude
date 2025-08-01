import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { initScrollReveal } from './utils/ScrollReveal';
import './App.css';
import './reveal.css';

function App() {
  // Inicializar animações quando componente montar
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        {/* Seção Home/Hero */}
        <section id="home" className="section hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title reveal-left">
                  Transforme sua vida com 
                  <span className="text-gradient"> atividade física</span>
                </h1>
                <p className="hero-description reveal-left" data-reveal-delay="200">
                  Descubra o poder da mudança através do movimento. 
                  Nossos programas personalizados vão te ajudar a alcançar 
                  seus objetivos de saúde e bem-estar.
                </p>
                <div className="hero-actions reveal-left" data-reveal-delay="400">
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
                <div className="hero-stats reveal-fade" data-reveal-delay="600">
                  <div className="stat-item" data-reveal-delay="700">
                    <span className="stat-number" data-counter="500" data-suffix="+">0+</span>
                    <span className="stat-label">Alunos transformados</span>
                  </div>
                  <div className="stat-item" data-reveal-delay="800">
                    <span className="stat-number" data-counter="3">0</span>
                    <span className="stat-label">Anos de experiência</span>
                  </div>
                  <div className="stat-item" data-reveal-delay="900">
                    <span className="stat-number" data-counter="95" data-suffix="%">0%</span>
                    <span className="stat-label">Taxa de satisfação</span>
                  </div>
                </div>
              </div>
              <div className="hero-image reveal-right" data-reveal-delay="300">
                <div className="hero-image-container">
                  <img 
                    src={`${import.meta.env.BASE_URL}icon.png`} 
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
   <div className="section-header reveal-fade">
     <h2 className="section-title">Sobre o Projeto Saúde</h2>
     <p className="section-subtitle">
       Conheça nossa história e nossa missão de transformar vidas
     </p>
   </div>
   
   <div className="about-content">
     <div className="about-text reveal" data-reveal-delay="200">
       <h3 className="about-subtitle">Nossa Missão</h3>
       <p className="about-description">
         Acreditamos que a atividade física é a chave para uma vida plena e saudável. 
         Nosso objetivo é democratizar o acesso a treinos de qualidade, oferecendo 
         programas personalizados que se adaptam ao seu estilo de vida.
       </p>
       
       <div className="features-grid">
         <div className="feature-card reveal" data-reveal-delay="300">
           <div className="feature-icon">💪</div>
           <h4 className="feature-title">Treinos Personalizados</h4>
           <p className="feature-description">
             Programas adaptados às suas necessidades e objetivos específicos.
           </p>
         </div>
         
         <div className="feature-card reveal" data-reveal-delay="400">
           <div className="feature-icon">🎯</div>
           <h4 className="feature-title">Resultados Comprovados</h4>
           <p className="feature-description">
             Metodologia testada com mais de 500 alunos transformados.
           </p>
         </div>
         
         <div className="feature-card reveal" data-reveal-delay="500">
           <div className="feature-icon">🏆</div>
           <h4 className="feature-title">Acompanhamento Profissional</h4>
           <p className="feature-description">
             Suporte contínuo de profissionais qualificados em educação física.
           </p>
         </div>
       </div>
     </div>
     
     {/* Seção de Localização */}
     <div className="about-location reveal" data-reveal-delay="600">
       <h3 className="location-title">Nossa Localização</h3>
       <p className="location-description">
         Visite nossa unidade em Bragança - PA e conheça nossa estrutura completa.
       </p>
       
       <div className="location-info">
         <div className="location-address">
           <div className="address-icon">📍</div>
           <div className="address-details">
             <h4 className="address-title">Endereço</h4>
             <p className="address-text">
               BR-308, 553 - Bairro da Celpa<br/>
               Bragança - PA, 68647-000
             </p>
           </div>
         </div>
         
         <div className="map-container reveal" data-reveal-delay="700">
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455.279003837249!2d-46.774001675445156!3d-1.0655600598595383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92aedec20ca9fce7%3A0xb34611719dbd4fe5!2sE.M.E.F.%20JULIA%20QUADROS%20PEINADO!5e0!3m2!1spt-BR!2sbr!4v1753965887581!5m2!1spt-BR!2sbr"
             width="100%"
             height="300"
             style={{ border: 0, borderRadius: '12px' }}
             allowFullScreen={true}
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             title="Localização do Projeto Saúde"
           ></iframe>
         </div>
         
         <div className="location-actions">
           {/* <a 
             href="https://maps.app.goo.gl/v39Teg1fLnWmtNjdAhttps://www.google.com/maps/place/E.M.E.F.+JULIA+QUADROS+PEINADO/@-1.0653676,-46.7736213,19.4z/data=!4m15!1m8!3m7!1s0x92aedee9c97a20cf:0xdfdcb003066314b2!2sR.+J%C3%BAlia+Quadros+-+Bragan%C3%A7a,+PA,+68600-000!3b1!8m2!3d-1.0654382!4d-46.7731343!16s%2Fg%2F1ymvg44_v!3m5!1s0x92aedec20ca9fce7:0xb34611719dbd4fe5!8m2!3d-1.0657528!4d-46.7732872!16s%2Fg%2F11crzvpz6t?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/place/E.M.E.F.+JULIA+QUADROS+PEINADO/@-1.0653676,-46.7736213,19.4z/data=!4m15!1m8!3m7!1s0x92aedee9c97a20cf:0xdfdcb003066314b2!2sR.+J%C3%BAlia+Quadros+-+Bragan%C3%A7a,+PA,+68600-000!3b1!8m2!3d-1.0654382!4d-46.7731343!16s%2Fg%2F1ymvg44_v!3m5!1s0x92aedec20ca9fce7:0xb34611719dbd4fe5!8m2!3d-1.0657528!4d-46.7732872!16s%2Fg%2F11crzvpz6t?entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3Dhttps://www.google.com/maps/dir//BR-308,+553+-+Morro,+Bragan%C3%A7a+-+PA,+68647-000"
             target="_blank"
             rel="noopener noreferrer"
             className="btn btn-primary location-btn"
           >
             <span className="btn-icon">🗺️</span>
             Como Chegar
           </a> */}
           
           <a 
             href="https://wa.me/5591986220244?text=Olá! Gostaria de saber mais sobre a localização da academia."
             target="_blank"
             rel="noopener noreferrer"
             className="btn btn-outline location-btn"
           >
             <span className="btn-icon">💬</span>
             Falar Conosco
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
</section>

        {/* Seção Serviços/Treinos */}
        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-header reveal-scale">
              <h2 className="section-title">Nossos Treinos</h2>
              <p className="section-subtitle">
                Encontre o programa perfeito para seus objetivos
              </p>
            </div>
            
            <div className="services-grid">
              <div className="service-card reveal" data-reveal-delay="200">
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
              
              <div className="service-card featured reveal" data-reveal-delay="300">
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
              
              <div className="service-card reveal" data-reveal-delay="400">
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
    <div className="section-header reveal-fade">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="section-subtitle">
        Pronto para começar sua transformação? Fale conosco!
      </p>
    </div>
    
    <div className="contact-content">
      <div className="contact-info reveal-left" data-reveal-delay="200">
        <h3 className="contact-subtitle">Vamos conversar</h3>
        <p className="contact-description">
          Estamos aqui para ajudar você a dar o primeiro passo 
          em direção a uma vida mais saudável e ativa.
        </p>
        
        <div className="contact-methods">
          <a href="tel:91999175479" className="contact-method reveal" data-reveal-delay="300">
            <div className="contact-method-icon phone-icon"></div>
            <div className="contact-method-content">
              <h4 className="contact-method-title">Telefone</h4>
              <p className="contact-method-text">(91) 98622-0244</p>
            </div>
          </a>
          
          <a href="mailto:contato@projetosaude.com" className="contact-method reveal" data-reveal-delay="400">
            <div className="contact-method-icon email-icon"></div>
            <div className="contact-method-content">
              <h4 className="contact-method-title">Email</h4>
              <p className="contact-method-text">contato@projetosaude.com</p>
            </div>
          </a>
          
          <a href="https://wa.me/5591986220244" target="_blank" rel="noopener noreferrer" className="contact-method reveal" data-reveal-delay="500">
            <div className="contact-method-icon whatsapp-icon"></div>
            <div className="contact-method-content">
              <h4 className="contact-method-title">WhatsApp</h4>
              <p className="contact-method-text">Resposta rápida</p>
            </div>
          </a>
        </div>
      </div>
      
<div className="contact-form-container reveal-right" data-reveal-delay="300">
 <form className="contact-form" onSubmit={(e) => {
   e.preventDefault();
   
   // Coletar dados do formulário
   const form = e.currentTarget; // Melhor que e.target para formulários
   const formData = new FormData(form);
   
   // Garantir que todos os valores sejam strings
   const name = formData.get('name') as string;
   const email = formData.get('email') as string;
   const phone = formData.get('phone') as string;
   const objective = formData.get('objective') as string;
   const message = formData.get('message') as string;
   
   // Mapear objetivos para texto mais legível
   const objectiveMap = {
     'emagrecimento': 'Emagrecimento',
     'ganho-massa': 'Ganho de massa muscular',
     'condicionamento': 'Condicionamento físico',
     'reabilitacao': 'Reabilitação',
     'bem-estar': 'Bem-estar geral'
   } as const;
   
   // Obter texto do objetivo
   const objectiveText = objectiveMap[objective as keyof typeof objectiveMap] || objective;
   
   // Criar mensagem formatada
   const whatsappMessage = `Olá! Gostaria de mais informações sobre o projeto saúde.

*Dados para contato:*
 Nome: ${name}
 Email: ${email}
 Telefone: ${phone}
 Objetivo: ${objectiveText}

*Mensagem:*
${message}`;
   
   // Codificar a mensagem para URL
   const encodedMessage = encodeURIComponent(whatsappMessage);
   
   // Criar URL do WhatsApp (usando o número correto do projeto)
   const whatsappURL = `https://wa.me/5591986220244?text=${encodedMessage}`;
   
   // Abrir WhatsApp
   window.open(whatsappURL, '_blank');
 }}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name"
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
                name="email"
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
              name="phone"
              className="form-input" 
              placeholder="(91) 99999-9999"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="objective" className="form-label">Objetivo</label>
            <select id="objective" name="objective" className="form-select" required>
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
              name="message"
              className="form-textarea" 
              rows={4}
              placeholder="Conte-nos mais sobre seus objetivos e expectativas..."
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary btn-lg form-submit">
            Enviar via WhatsApp
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