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
  { image: '/images/dental/v1-quadrantes.webp', title: 'Quadrantes Dentários', tag: 'Vol. 1 · Fundamentos' },
  { image: '/images/dental/v1-numeracao-permanentes.webp', title: 'Numeração dos Dentes Permanentes', tag: 'Vol. 1 · Fundamentos' },
  { image: '/images/dental/v1-numeracao-deciduos.webp', title: 'Numeração dos Dentes Decíduos', tag: 'Vol. 1 · Fundamentos' },
  { image: '/images/dental/v1-mesial-distal.webp', title: 'Mesial × Distal', tag: 'Vol. 1 · Fundamentos' },
  { image: '/images/dental/v1-coroa-colo-raiz.webp', title: 'Coroa, Colo e Raiz', tag: 'Vol. 1 · Fundamentos' },
  { image: '/images/dental/v1-sulcos-fissuras.webp', title: 'Sulcos, Fissuras e Fossetas', tag: 'Vol. 1 · Fundamentos' },
  { image: '/images/dental/v1-cuspides-vertentes.webp', title: 'Cúspides e Vertentes', tag: 'Vol. 1 · Fundamentos' },
  { image: '/images/dental/v1-oclusao.webp', title: 'Oclusão: Conceitos Essenciais', tag: 'Vol. 1 · Fundamentos' },
];

const carrossel2 = [
  { image: '/images/dental/c2-incisivo-central.webp', title: 'Incisivo Central Superior', tag: 'Vol. 2 · Anteriores' },
  { image: '/images/dental/c2-canino-inferior.webp', title: 'Canino Inferior: Vistas do Dente', tag: 'Vol. 2 · Anteriores' },
  { image: '/images/dental/c2-premolar-superior.webp', title: '1º Pré-Molar Superior', tag: 'Vol. 3 · Pré-Molares' },
  { image: '/images/dental/c2-premolar-oclusal.webp', title: '1º Pré-Molar: Vista Oclusal', tag: 'Vol. 3 · Pré-Molares' },
  { image: '/images/dental/c2-resumao-premolares.webp', title: 'Resumão Visual dos Pré-Molares', tag: 'Vol. 3 · Pré-Molares' },
  { image: '/images/dental/c2-molar-superior.webp', title: '1º Molar Superior', tag: 'Vol. 4 · Molares' },
  { image: '/images/dental/c2-denticao-decidua.webp', title: 'Decíduos × Permanentes', tag: 'Vol. 5 · Decídua' },
  { image: '/images/dental/c2-mesial-distal.webp', title: 'Como Encontrar Mesial e Distal', tag: 'Vol. 6 · Identificação' },
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
