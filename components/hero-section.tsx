'use client';

import { Check } from 'lucide-react';

export function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  const scrollToOffer = () => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#FCFBF8' }}>
      <div className="mobile-content flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border" style={{ backgroundColor: 'rgba(18, 85, 200, 0.06)', color: '#1255C8', borderColor: 'rgba(18, 85, 200, 0.30)' }}>
              🔒 COMPRA 100% SEGURA E PROTEGIDA
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-3 sm:gap-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em]" style={{ color: '#1255C8', fontFamily: 'var(--font-inter)' }}>
              Anatomia Dental
            </span>
            <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-balance text-center max-w-2xl" style={{ color: '#08124D' }}>
              Guia Visual de Anatomia Dental
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-pretty text-center max-w-md sm:max-w-lg" style={{ color: '#5B6B8A' }}>
              Aprenda a reconhecer e diferenciar os dentes através de imagens, vistas anatômicas, comparações e detalhes visuais reunidos em um só material.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-pretty text-center max-w-md" style={{ color: '#5B6B8A' }}>
              
            </p>
          </div>
          <div className="w-full flex justify-center py-2 sm:py-4 md:py-6 overflow-visible">
            <div className="w-full max-w-2xl flex justify-center items-center">
              <img
                src="/images/dental/hero-colecao.png"
                alt="Coleção Guia Visual de Anatomia Dental: 6 volumes, páginas internas com dentes, vistas anatômicas e comparações"
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 24px 45px rgba(8, 18, 77, 0.25))' }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-12 rounded-full text-sm sm:text-base md:text-lg active:scale-95 cta-animate"
              style={{
                background: '#22C55E',
                color: '#FFFFFF',
                border: '1px solid #22C55E',
                boxShadow: '0 8px 22px rgba(34, 197, 94, 0.4)',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#16A34A';
                e.currentTarget.style.borderColor = '#16A34A';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(34, 197, 94, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#22C55E';
                e.currentTarget.style.borderColor = '#22C55E';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(34, 197, 94, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR O GUIA VISUAL
            </button>
            <p className="text-xs sm:text-sm text-center" style={{ color: '#5B6B8A' }}>Acesso imediato após a confirmação do pagamento.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-2">
            {['Pagamento único', 'Consulte quando precisar', '7 dias de garantia', 'Acesso imediato'].map((label) => <div key={label} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: '#08124D' }}><span className="rounded-full flex items-center justify-center" style={{ backgroundColor: '#22C55E', color: '#FFFFFF', width: '18px', height: '18px' }}><Check size={11} strokeWidth={3} aria-hidden="true" /></span>{label}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
