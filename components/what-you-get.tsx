export function WhatYouGet() {
  const collections = [
    ['24', 'FUNDAMENTOS DA ANATOMIA DENTAL', 'Construa a base necessária para compreender a anatomia dos dentes, passando por dentições, grupos dentários, numeração, faces, superfícies, terços, cúspides, sulcos, fossas, raízes, arcadas e oclusão.', 'Entender a linguagem visual da Anatomia Dental.'],
    ['24', 'INCISIVOS E CANINOS PERMANENTES', 'Estude incisivos e caninos superiores e inferiores em diferentes vistas, aprendendo suas características anatômicas, diferenças, formas de reconhecimento e como identificar o lado correto.', 'Reconhecer e diferenciar os dentes anteriores.'],
    ['24', 'PRÉ-MOLARES PERMANENTES', 'Compare primeiros e segundos pré-molares superiores e inferiores através das vistas vestibular, palatina/lingual, proximal e oclusal, observando cúspides, sulcos, raízes e contornos.', 'Diferenciar pré-molares semelhantes com mais segurança.'],
    ['32', 'MOLARES PERMANENTES', 'Explore primeiros, segundos e terceiros molares superiores e inferiores, com foco em vistas oclusais, cúspides, sulcos, fossas, raízes e características que ajudam na identificação.', 'Reconhecer os dentes posteriores mais complexos.'],
    ['18', 'DENTIÇÃO DECÍDUA', 'Visualize incisivos, caninos e molares decíduos, compare com a dentição permanente e aprenda as diferenças de tamanho, coroa, raízes, esmalte e proporções.', 'Diferenciar dentes decíduos dos permanentes.'],
    ['18', 'IDENTIFICAÇÃO DENTAL NA PRÁTICA', 'Use um método visual para reconhecer grupo dental, arcada, dente específico, lado, formato da coroa, cúspides, raízes, anatomia interna e outros detalhes decisivos.', 'Transformar conhecimento anatômico em identificação prática.'],
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FCFBF8' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-12">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#103F6E' }}>
            Anatomia Dental Organizada em 6 Coleções Visuais
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#5B6B8A' }}>
            Cada volume reúne uma parte importante da Anatomia Dental, organizada visualmente para facilitar a identificação, comparação e revisão durante o estudo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {collections.map(([count, title, description, funcao]) => (
            <article
              key={title}
              className="group relative flex min-h-[220px] flex-col rounded-[18px] border p-6 shadow-[0_8px_24px_rgba(16,63,110,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#1255C8] hover:shadow-[0_14px_30px_rgba(16,63,110,0.12)]"
              style={{ backgroundColor: '#FCFBF8', borderColor: 'rgba(16,63,110,0.12)' }}
            >
              <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[#1255C8] opacity-70 transition-opacity duration-250 group-hover:opacity-100" />
              <div className="flex items-baseline gap-2">
                <span className="font-grotesk text-4xl leading-none sm:text-5xl" style={{ color: '#1255C8' }}>
                  {count}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1255C8' }}>
                  Páginas
                </span>
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="font-grotesk text-lg leading-tight text-pretty sm:text-xl uppercase tracking-wide" style={{ color: '#103F6E' }}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#5B6B8A' }}>{description}</p>
              </div>
              <p className="mt-5 border-t pt-4 text-xs sm:text-sm" style={{ color: '#5B6B8A', borderColor: 'rgba(16,63,110,0.12)' }}>
                <span className="font-bold uppercase tracking-wide" style={{ color: '#1255C8' }}>Função:</span>{' '}
                {funcao}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
