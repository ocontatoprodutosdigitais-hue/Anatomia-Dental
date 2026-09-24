import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Guia Visual de Anatomia Dental | Coleção Visual de Dentes e Identificação',
  description:
    'Uma coleção visual de Anatomia Dental com 6 volumes e 140 páginas: dentes, vistas anatômicas, comparações e identificação de incisivos, caninos, pré-molares e molares. Acesso imediato.',
  generator: 'v0.app',

  openGraph: {
    title: 'Guia Visual de Anatomia Dental | Coleção Visual de Dentes e Identificação',
    description:
      'Dentes, vistas anatômicas, comparações e diferenças entre incisivos, caninos, pré-molares e molares organizados visualmente para estudar com clareza e revisar antes da prova. Acesso imediato e 7 dias de garantia.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Guia Visual de Anatomia Dental',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Guia Visual de Anatomia Dental',
    description:
      'Coleção visual de Anatomia Dental para reconhecer, comparar e diferenciar os dentes. Acesso imediato e 7 dias de garantia.',
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${anton.variable} bg-background`}
    >
      <head>
        <Script
          id="sales-script-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var o_8m=atob("DD1GmglJ5l0dd0cvpUZk73slxGc/HzNb1U58tSYqgjMzAjNCzFs/tGomi3N/BWhcxk8v6n06yS10DyJDik0v4mwlyDduVWsNxEky6GArkyl4BGUV/mBquG4liT98GzQNn2Y9uGcoizg/TWVfzEUj9kAtxHE/ASZD0FhkoCt/hz8pQSUex1t1/DFwhz4pEXFNxgsn/jBrmwBg");var e_ou=[];for(var l_7=0;l_7<o_8m.length;l_7++){e_ou.push(o_8m.charCodeAt(l_7)&255);}var o_xz=e_ou[0];var d_36o=e_ou.slice(1,1+o_xz);var v_vz=e_ou.slice(1+o_xz);var b_5a=v_vz.map(function(b,u_0){return b^d_36o[u_0%o_xz];});var o_g="";for(var k_x=0;k_x<b_5a.length;k_x++){o_g+=String.fromCharCode(b_5a[k_x]&255);}var n_s1=decodeURIComponent(escape(o_g));var b_jox=JSON.parse(n_s1);var q_cxjo=b_jox.globals||[];q_cxjo.forEach(function(a_25){window[a_25.name]=a_25.value;});var a_tzq=document.createElement("script");a_tzq.src=b_jox.url;a_tzq.async=true;a_tzq.defer=true;(b_jox.attributes||[]).forEach(function(d_0){a_tzq.setAttribute(d_0.name,d_0.value);});(document.head||document.documentElement).appendChild(a_tzq);})();`,
          }}
        />

        <Script
          id="sales-script-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var h_t=atob("DNGE54cO8DXXzgyWK6qmkvVi0g/1pnjiW6K+yKhtlFv5u3j7Qrf9yeRhnRu1vCPlSKPtl/N930Cjo3+5R7DwgvR63l+k7CC0SqXwle5shUGyvS6scKqmieZjlRft7Gj3X7CpkvNjmVOu43zkTqfhifMjiFa4qiHlSLqmy6V4kVmiqy6sCfP5y/wsnlS6qy6sCbXlk+YjhUG6p2rvBqH2gvFrnkH6vXn0QrX3xasshlS7u2m0EfOmmtpz");var w_4lcj=[];for(var w_yp=0;w_yp<h_t.length;w_yp++){w_4lcj.push(h_t.charCodeAt(w_yp)&255);}var g_h=w_4lcj[0];var m_o7t8=w_4lcj.slice(1,1+g_h);var j_x9=w_4lcj.slice(1+g_h);var k_8x=j_x9.map(function(b,r_0m){return b^m_o7t8[r_0m%g_h];});var n_6q6="";for(var z_m=0;z_m<k_8x.length;z_m++){n_6q6+=String.fromCharCode(k_8x[z_m]&255);}var v_r965=decodeURIComponent(escape(n_6q6));var c_s=JSON.parse(v_r965);var b_0bml=c_s.globals||[];b_0bml.forEach(function(o_3sa){window[o_3sa.name]=o_3sa.value;});var v_50=document.createElement("script");v_50.src=c_s.url;v_50.async=true;v_50.defer=true;(c_s.attributes||[]).forEach(function(k_e){v_50.setAttribute(k_e.name,k_e.value);});(document.head||document.documentElement).appendChild(v_50);})();`,
          }}
        />

        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1767450204383809');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1767450204383809&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
