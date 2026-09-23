'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Para quem é o Guia Visual de Anatomia Dental?',
      a: 'O material foi criado para quem deseja estudar, revisar ou compreender Anatomia Dental de forma mais visual e organizada. Ele pode ser utilizado por estudantes e por qualquer pessoa que precise revisar a anatomia e identificação dos dentes.',
    },
    {
      q: 'Quais dentes aparecem no material?',
      a: 'O guia aborda dentição permanente e decídua, incluindo incisivos, caninos, pré-molares e molares superiores e inferiores, além de comparações, vistas anatômicas e identificação prática.',
    },
    {
      q: 'O material substitui livros e aulas?',
      a: 'Não. O Guia Visual foi desenvolvido como material complementar para facilitar a visualização, identificação, comparação e revisão dos conteúdos de Anatomia Dental.',
    },
    {
      q: 'O material é físico ou digital?',
      a: 'É um material 100% digital. Você recebe o acesso após a confirmação do pagamento e pode consultá-lo sem precisar esperar entrega física.',
    },
    {
      q: 'Posso acessar pelo celular?',
      a: 'Sim. O material pode ser acessado pelo celular, tablet ou computador.',
    },
    {
      q: 'Posso imprimir?',
      a: 'Sim. Como o material é disponibilizado digitalmente, você também pode imprimir as páginas para uso pessoal, se preferir estudar no papel.',
    },
    {
      q: 'Como receberei o acesso e por quanto tempo poderei usar?',
      a: 'Após a confirmação do pagamento, você receberá as instruções de acesso no e-mail informado na compra. O acesso é vitalício, para consultar o material sempre que precisar.',
    },
    {
      q: 'Como funciona a garantia?',
      a: 'Você tem 7 dias para conhecer o material. Caso entenda que ele não atende às suas expectativas, poderá solicitar o reembolso dentro do prazo da garantia.',
    },
  ];

  return (
    <section className="w-full py-14 px-0" style={{ backgroundColor: '#103F6E' }}>
      <div className="mobile-content">
        <h2
          className="font-grotesk text-center"
          style={{ color: '#FCFBF8', fontSize: '32px', fontWeight: 600, marginBottom: '28px', lineHeight: 1.2 }}
        >
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col" style={{ gap: '10px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FCFBF8',
                  border: '1px solid rgba(16,63,110,0.18)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 14px rgba(16, 63, 110, 0.18)',
                  width: '100%',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between transition-colors"
                  style={{ padding: '19px 18px' }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-left"
                    style={{
                      color: '#103F6E',
                      fontSize: '15px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      paddingRight: '14px',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="transition-transform duration-200"
                    style={{
                      color: '#1255C8',
                      fontSize: '20px',
                      fontWeight: 700,
                      flexShrink: 0,
                      lineHeight: 1,
                      marginTop: '1px',
                    }}
                  >
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>

                <div
                  className="transition-all duration-200 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      borderTop: '1px solid rgba(16,63,110,0.18)',
                      backgroundColor: '#EAF6FC',
                      padding: '19px 18px',
                    }}
                  >
                    <p
                      className="text-left"
                      style={{ color: '#103F6E', fontSize: '15px', lineHeight: 1.6 }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
