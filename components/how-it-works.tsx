export function HowItWorks() {
  const steps = [
    ['1', 'OBSERVE', 'Analise o formato da coroa, raízes, cúspides, sulcos e os principais detalhes anatômicos do dente.'],
    ['2', 'IDENTIFIQUE', 'Reconheça o grupo dental, a arcada, o dente específico e suas principais estruturas anatômicas.'],
    ['3', 'COMPARE', 'Coloque dentes semelhantes lado a lado e veja exatamente quais características diferenciam um do outro.'],
    ['4', 'FIXE', 'Revise as imagens e treine seu olhar até reconhecer os dentes pelas próprias características anatômicas.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#103F6E' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#FCFBF8' }}>
            Estudar Anatomia Dental Pode Ser Muito Mais Visual
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(252,251,248,0.78)' }}>
            Em quatro etapas, você aprende a observar o dente, localizar características importantes, comparar diferenças e reforçar sua identificação.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="how-it-works-card relative flex flex-col items-center text-center h-full"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#FCFBF8',
                border: '1px solid rgba(16,63,110,0.12)',
                boxShadow: '0 12px 30px rgba(16, 63, 110, 0.28)',
                padding: '28px',
                transition: 'all 250ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-full"
                style={{ height: '4px', backgroundColor: '#1255C8' }}
              />
              <div
                className="rounded-full flex items-center justify-center text-xl font-bold font-grotesk mb-4"
                style={{
                  width: '52px',
                  height: '52px',
                  background: '#1255C8',
                  color: '#FCFBF8',
                  boxShadow: '0 6px 14px rgba(16, 63, 110, 0.25)',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg mb-3 uppercase tracking-wide" style={{ color: '#103F6E' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5B6B8A' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-it-works-card:hover {
          transform: translateY(-4px);
          border-color: #1255C8;
          box-shadow: 0 18px 38px rgba(16, 63, 110, 0.32);
        }
      `}</style>
    </section>
  );
}
