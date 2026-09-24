import { Quote } from 'lucide-react';

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Avaliação de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
          <path d="M12 2.5l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8-6.2-3.7-6.2 3.7 1.6-6.8-5.2-4.6 6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

const depoimentos = [
  {
    text: 'Eu sempre confundia alguns dentes porque nos slides parecia tudo muito parecido. Com as comparações lado a lado ficou muito mais fácil perceber quais detalhes realmente diferenciam cada um.',
    name: 'Mariana Alves',
    role: 'Estudante de Odontologia',
    image: '/images/dental/depoimento-1.webp',
  },
  {
    text: 'Usei principalmente para revisar antes da prova. Em poucos minutos eu conseguia comparar incisivos, pré-molares e molares sem precisar voltar em várias aulas e anotações.',
    name: 'Camila Rocha',
    role: 'Estudante de Odontologia',
    image: '/images/dental/depoimento-2.webp',
  },
  {
    text: 'Gostei porque não é aquele material cheio de texto. Eu abro no celular, vejo as imagens, comparo as características e consigo revisar exatamente o ponto que estava me confundindo.',
    name: 'Lucas Ferreira',
    role: 'Estudante de Odontologia',
    image: '/images/dental/depoimento-3.webp',
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#EAF6FC' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#103F6E' }}>
            Relatos de Quem Já Utiliza o Material
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#5B6B8A' }}>
            Veja as experiências de quem passou a estudar e revisar Anatomia Dental com mais clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 p-8 md:p-9"
              style={{ backgroundColor: '#FCFBF8', border: '1px solid rgba(18,85,200,0.15)', borderRadius: '20px', boxShadow: '0 8px 24px rgba(16,63,110,0.07)' }}
            >
              <div className="flex items-center justify-between">
                <StarRow />
                <Quote size={22} style={{ color: 'rgba(18,85,200,0.4)' }} aria-hidden="true" />
              </div>

              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#103F6E' }}>
                {'\u201C'}{d.text}{'\u201D'}
              </p>

              <div className="mt-auto pt-2 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden">
                  <img
                    src={d.image || "/placeholder.svg"}
                    alt={`Foto de ${d.name}, ${d.role}`}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm" style={{ color: '#103F6E' }}>
                    {d.name}
                  </span>
                  <span className="text-xs" style={{ color: '#5B6B8A' }}>
                    {d.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
