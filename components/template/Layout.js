import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Footer from '../organism/Footer';
import Header from '../organism/Header';
import GlobalStyle from '../../styles/GlobalStyle';
import Lines from '../molecule/Lines';
import OpenGraph from '../atoms/OpenGraph';

function getFullHeight(){
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

if (typeof window !== 'undefined') {
	getFullHeight();
	window.addEventListener('resize', getFullHeight);
}

export default function Layout({ structuredData, children }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Mario Roca - Creative Developer Designer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={process.env.REACT_APP_URL} />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <OpenGraph />
      </Head>
      <GlobalStyle />
      <Header />
      <main>
        {children}
      </main>
      <Lines />
      <Footer />
    </ThemeProvider>
  )
}