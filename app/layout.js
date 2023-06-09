import './globals.css'
import Head from 'next/head';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Sidebar from './components/sidebar/Sidebar';
import RightSidebar from './components/sidebar/rightSidebar';

export const metadata = {
  title: 'Nabil',
  description: 'Portfolio Nabil Syahnaufal',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* BOXICON */}
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

        {/* UNICONS */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      </Head>
      <html lang="en">
        <body>
          <Header />
          <Sidebar />
          <RightSidebar />
          {children}
        </body>
      </html>
    </>
  )
}
