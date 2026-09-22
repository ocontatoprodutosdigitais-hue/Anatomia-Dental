'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { SubjectsSection } from '@/components/subjects-section';
import { PricingSection } from '@/components/pricing-section';
import { BonusSection } from '@/components/bonus-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

// Páginas internas reais da coleção do Guia Visual de Anatomia Dental
const carrossel1 = [
  { image: '/images/dental/page-premolar.png', title: '1º Pré-Molar Superior — Vistas do Dente', tag: 'Vol. 3 · Pré-Molares' },
  { image: '/images/dental/page-molar.png', title: '1º Molar Superior — Identificação Visual', tag: 'Vol. 4 · Molares' },
  { image: '/images/dental/page-deciduos.png', title: 'Dentição Decídua × Permanente', tag: 'Vol. 5 · Decídua' },
  { image: '/images/dental/page-nc-premolares.png', title: 'Não Confunda: Pré-Molares', tag: 'Vol. 3 · Pré-Molares' },
  { image: '/images/dental/page-nc-molares.png', title: 'Não Confunda: Molares', tag: 'Vol. 4 · Molares' },
  { image: '/images/dental/page-incisivos.png', title: 'Incisivos Superiores', tag: 'Vol. 2 · Anteriores' },
  { image: '/images/dental/page-mesial-distal.png', title: 'Como Encontrar Mesial e Distal', tag: 'Vol. 6 · Identificação' },
  { image: '/images/dental/page-mapa.png', title: 'Mapa Final dos Dentes', tag: 'Vol. 6 · Identificação' },
  { image: '/images/dental/page-cuspides.png', title: 'Use Cúspides, Cristas e Sulcos', tag: 'Vol. 1 · Fundamentos' },
  { image: '/images/dental/page-checklist.png', title: 'Checklist de Identificação Dental', tag: 'Vol. 6 · Identificação' },
];

const carrossel2 = [
  { image: '/images/dental/page-incisivos.png', title: 'Não Confunda: Incisivos', tag: 'Vol. 2 · Anteriores' },
  { image: '/images/dental/page-caninos.png', title: 'Não Confunda: Caninos', tag: 'Vol. 2 · Anteriores' },
  { image: '/images/dental/page-nc-premolares.png', title: 'Não Confunda: Pré-Molares', tag: 'Vol. 3 · Pré-Molares' },
  { image: '/images/dental/page-nc-molares.png', title: 'Não Confunda: Molares', tag: 'Vol. 4 · Molares' },
  { image: '/images/dental/page-deciduos.png', title: 'Decíduos × Permanentes', tag: 'Vol. 5 · Decídua' },
  { image: '/images/dental/page-mesial-distal.png', title: 'Como Encontrar Mesial e Distal', tag: 'Vol. 6 · Identificação' },
  { image: '/images/dental/page-cuspides.png', title: 'Use a Vista Incisal/Oclusal', tag: 'Vol. 4 · Molares' },
  { image: '/images/dental/page-raizes.png', title: 'Use Número e Formato das Raízes', tag: 'Vol. 6 · Identificação' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#EAF6FC' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProductCarousel
        title="Conheça o Guia Visual de Anatomia Dental por Dentro"
        subtitle="Veja como o conteúdo foi organizado para você bater o olho, reconhecer os dentes, comparar características e entender exatamente o que está observando."
        items={carrossel1}
        bg="#FCFBF8"
      />
      <HowItWorks />
      <WhatYouGet />
      <SubjectsSection />
      <ProductCarousel
        title="Identifique, Compare e Diferencie com Mais Clareza"
        subtitle="Cada tipo de página ajuda você a reconhecer dentes, comparar diferenças e revisar os pontos que mais geram dúvida."
        flowSteps={[
          ['Identificação Visual', 'Veja o dente em diferentes vistas e identifique suas principais características.'],
          ['Como Reconhecer', 'Entenda quais características ajudam a reconhecer cada dente.'],
          ['Como Saber o Lado', 'Use contornos, ângulos, cúspides e raízes para diferenciar direita e esquerda.'],
          ['Não Confunda', 'Compare dentes parecidos lado a lado e veja exatamente o que diferencia um do outro.'],
          ['Comparações Visuais', 'Compare superiores × inferiores, centrais × laterais, 1º × 2º, decíduos × permanentes e muito mais.'],
        ]}
        items={carrossel2}
        reverse={true}
        bg="#FCFBF8"
      />
      <Testimonials />
      <BonusSection />
      <div ref={offerRef}><PricingSection /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
