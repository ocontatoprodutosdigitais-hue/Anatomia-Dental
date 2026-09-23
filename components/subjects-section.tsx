import { Compass, Eye, GitCompare, Grid2x2, Layers, ListChecks } from 'lucide-react';

type Block = {
  badge: string;
  title: string;
  icon: typeof Compass;
  accent: string;
  items: string[];
  description: string;
};

const accent = '#1255C8';

const blocks: Block[] = [
  {
    badge: 'FUNDAMENTOS',
    title: 'Fundamentos da Anatomia Dental',
    icon: Compass,
    accent,
    items: [
      'Dentição permanente e decídua',
      'Grupos dentários',
      'Numeração dos dentes',
      'Quadrantes',
      'Maxila e mandíbula',
      'Faces e superfícies dentárias',
      'Mesial e distal',
      'Terços dentários',
      'Cúspides e vertentes',
      'Cristas e arestas',
      'Sulcos, fissuras e fossas',
      'Anatomia das raízes',
      'Anatomia interna',
      'Oclusão e erupção',
    ],
    description: 'Construa a base visual necessária antes de avançar para a identificação dos dentes.',
  },
  {
    badge: 'DENTES ANTERIORES',
    title: 'Incisivos e Caninos Permanentes',
    icon: Eye,
    accent,
    items: [
      'Incisivo central superior',
      'Incisivo lateral superior',
      'Incisivo central inferior',
      'Incisivo lateral inferior',
      'Canino superior',
      'Canino inferior',
      'Diferentes vistas anatômicas',
      'Como reconhecer',
      'Como saber o lado',
      'Comparações visuais',
      'Não Confunda',
    ],
    description: 'Reconheça as diferenças que separam dentes anteriores visualmente semelhantes.',
  },
  {
    badge: 'PRÉ-MOLARES',
    title: 'Pré-Molares Permanentes',
    icon: GitCompare,
    accent,
    items: [
      '1º pré-molar superior',
      '2º pré-molar superior',
      '1º pré-molar inferior',
      '2º pré-molar inferior',
      'Vistas vestibulares',
      'Vistas linguais/palatinas',
      'Vistas proximais',
      'Vistas oclusais',
      'Cúspides',
      'Sulcos',
      'Raízes',
      'Comparações lado a lado',
    ],
    description: 'Aprenda a diferenciar primeiros e segundos pré-molares superiores e inferiores.',
  },
  {
    badge: 'MOLARES',
    title: 'Molares Permanentes',
    icon: Grid2x2,
    accent,
    items: [
      '1º molar superior',
      '2º molar superior',
      '3º molar superior',
      '1º molar inferior',
      '2º molar inferior',
      '3º molar inferior',
      'Cúspides',
      'Sulcos e fossas',
      'Cristas',
      'Raízes',
      'Vista oclusal',
      'Não Confunda',
    ],
    description: 'Reconheça padrões oclusais e características que diferenciam os molares.',
  },
  {
    badge: 'DENTIÇÃO DECÍDUA',
    title: 'Dentição Decídua',
    icon: Layers,
    accent,
    items: [
      'Características gerais',
      'Decíduos × permanentes',
      'Incisivos superiores',
      'Incisivos inferiores',
      'Canino superior',
      'Canino inferior',
      'Molares superiores',
      'Molares inferiores',
      'Como identificar',
      'Comparações visuais',
    ],
    description: 'Entenda as características próprias dos dentes decíduos e evite confundi-los com permanentes.',
  },
  {
    badge: 'IDENTIFICAÇÃO',
    title: 'Identificação Dental na Prática',
    icon: ListChecks,
    accent,
    items: [
      'Por onde começar',
      'Qual é o grupo dental',
      'Superior ou inferior',
      'Qual dente dentro do grupo',
      'Direito ou esquerdo',
      'Mesial e distal',
      'Formato da coroa',
      'Cúspides, cristas e sulcos',
      'Vista incisal/oclusal',
      'Número e formato das raízes',
      'Anatomia interna',
      'Checklist final',
    ],
    description: 'Use um processo lógico para chegar à identificação do dente com mais segurança.',
  },
];

export function SubjectsSection() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#EAF6FC' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-14">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#103F6E' }}>
            Veja Tudo o Que Você Vai Encontrar no Material
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#5B6B8A' }}>
            O conteúdo foi dividido em seis volumes para você localizar rapidamente o que precisa estudar e entender cada dente com mais clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.badge}
                className="flex flex-col rounded-[18px] border p-6 sm:p-7"
                style={{ backgroundColor: '#FCFBF8', borderColor: 'rgba(16,63,110,0.12)', boxShadow: '0 8px 24px rgba(16,63,110,0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex shrink-0 items-center justify-center rounded-xl"
                    style={{ width: '44px', height: '44px', backgroundColor: `${block.accent}14`, color: block.accent }}
                  >
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: block.accent }}
                    >
                      {block.badge}
                    </span>
                    <h3 className="font-grotesk text-lg leading-tight sm:text-xl" style={{ color: '#103F6E' }}>
                      {block.title}
                    </h3>
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#103F6E' }}>
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: block.accent }}
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 border-t pt-4 text-sm leading-relaxed" style={{ color: '#5B6B8A', borderColor: 'rgba(16,63,110,0.12)' }}>
                  {block.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
