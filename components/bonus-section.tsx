'use client';

import { Star } from 'lucide-react';

const bonuses = [
  {
    label: 'BÔNUS 1',
    name: 'Mapa Visual de Erupção Dental',
    description:
      'Material visual organizado para consultar rapidamente a cronologia de erupção, troca e desenvolvimento da dentição decídua e permanente.',
    oldPrice: 'De R$ 17,00',
    image: '/images/dental/bonus-1.png',
  },
  {
    label: 'BÔNUS 2',
    name: 'Checklist de Identificação Dental',
    description:
      'Roteiro prático para seguir durante a identificação dos dentes, observando grupo dental, arcada, lado, raízes e principais características anatômicas.',
    oldPrice: 'De R$ 19,90',
    image: '/images/dental/bonus-2.png',
  },
  {
    label: 'BÔNUS 3',
    name: 'Revisão Rápida de Anatomia Dental',
    description:
      'Resumo visual com os principais pontos da anatomia dental reunidos em um material compacto para revisar antes de provas, aulas e avaliações práticas.',
    oldPrice: 'De R$ 24,00',
    image: '/images/dental/bonus-3.png',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#FBBF24" strokeWidth={0} />
      ))}
    </div>
  );
}

export function BonusSection() {
  return (
      <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#103F6E' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#D7A52D' }}>
            Bônus Inclusos
          </span>
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-balance" style={{ color: '#FCFBF8' }}>
            Além do Material Principal, Você Recebe Mais 3 Bônus
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(252,251,248,0.90)' }}>
            Recursos extras para complementar seus estudos e reforçar os principais conteúdos de Anatomia Dental.
          </p>
        </div>

        {/* Cards: empilhados no mobile, lado a lado no desktop */}
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-6 lg:flex-row lg:gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.label}
              className="bonus-card flex w-full flex-col rounded-[20px] p-5 sm:p-6"
              style={{
                backgroundColor: '#FCFBF8',
                border: '1px solid rgba(16,63,110,0.12)',
                boxShadow: '0 12px 30px rgba(16, 63, 110, 0.28)',
                transition: 'all 250ms ease',
              }}
            >
              {/* Badge */}
              <span
                className="self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#1255C8', color: '#FCFBF8' }}
              >
                {bonus.label}
              </span>

              {/* Mockup */}
              <div className="mt-4 flex justify-center">
                <img
                  src={bonus.image || '/placeholder.svg'}
                  alt={`Capa do bônus: ${bonus.name}`}
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* Estrelas */}
              <div className="mt-4">
                <StarRow />
              </div>

              {/* Nome */}
              <h3 className="mt-3 font-grotesk text-base sm:text-lg leading-snug" style={{ color: '#103F6E' }}>
                {bonus.name}
              </h3>

              {/* Descrição */}
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#5B6B8A' }}>
                {bonus.description}
              </p>

              {/* Preço + selo */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4" style={{ borderColor: 'rgba(16,63,110,0.12)' }}>
                <span className="text-sm line-through" style={{ color: '#5B6B8A' }}>
                  {bonus.oldPrice}
                </span>
                <span
                  className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
                  style={{ backgroundColor: '#22C55E', color: '#FFFFFF' }}
                >
                  Hoje grátis
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bonus-card:hover {
          transform: translateY(-4px);
          border-color: #1255C8;
          box-shadow: 0 20px 42px rgba(16, 63, 110, 0.34);
        }
      `}</style>
    </section>
  );
}
