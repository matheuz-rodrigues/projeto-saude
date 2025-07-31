/**
 * Sistema simples para revelar elementos conforme o scroll
 * Adiciona classes CSS quando elementos entram na viewport
 */

export const initScrollReveal = (): void => {
  // Verificar se o browser suporta Intersection Observer
  if (!('IntersectionObserver' in window)) {
    // Fallback: mostrar todos os elementos imediatamente
    document.querySelectorAll('.reveal').forEach((el: Element) => {
      el.classList.add('revealed');
    });
    return;
  }

  // Configuração do observer
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.15, // 15% do elemento visível
    rootMargin: '0px 0px -50px 0px' // Começa um pouco antes
  };

  // Criar o observer
  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        // Elemento entrou na viewport - revelar
        entry.target.classList.add('revealed');
        
        // Opcional: parar de observar após revelar (performance)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos os elementos com classe 'reveal'
  const elementsToReveal: NodeListOf<Element> = document.querySelectorAll('.reveal');
  elementsToReveal.forEach((element: Element) => {
    observer.observe(element);
  });

  // Observar elementos com delay específico
  const elementsWithDelay: NodeListOf<HTMLElement> = document.querySelectorAll('[data-reveal-delay]');
  elementsWithDelay.forEach((element: HTMLElement) => {
    const delay: number = parseInt(element.dataset.revealDelay || '0') || 0;
    
    const delayedObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          delayedObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    delayedObserver.observe(element);
  });

  // Animação especial para contadores
  const counterElements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target as HTMLElement);
        counterObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counterElements.forEach((element: HTMLElement) => {
    counterObserver.observe(element);
  });
};

// Função para animar contadores
const animateCounter = (element: HTMLElement): void => {
  const finalValue: number = parseInt(element.dataset.counter || '0') || 0;
  const duration: number = 2000; // 2 segundos
  const frameDuration: number = 1000 / 60; // 60 FPS
  const totalFrames: number = Math.round(duration / frameDuration);
  
  let frame: number = 0;
  
  const counter: number = setInterval(() => {
    frame++;
    const progress: number = frame / totalFrames;
    
    // Easing: ease out
    const easeOut: number = 1 - Math.pow(1 - progress, 3);
    const currentValue: number = Math.round(finalValue * easeOut);
    
    // Atualizar o texto
    const suffix: string = element.dataset.suffix || '';
    element.textContent = currentValue + suffix;
    
    if (frame === totalFrames) {
      clearInterval(counter);
      element.textContent = finalValue + suffix;
    }
  }, frameDuration);
};