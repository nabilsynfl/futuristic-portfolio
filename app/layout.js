import './globals.css'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import RightSidebar from './components/sidebar/rightSidebar';
import Navbar from './components/navbar/Navbar';

export const metadata = {
  title: 'Nikolai',
  description: 'Portfolio Nabil Syahnaufal',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <Sidebar />
          <RightSidebar />
          <Navbar />
          {children}
        </body>
      </html>
    </>
  )
}
